import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { db } from "../lib/db";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) return done(new Error("User not found."));
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

export default passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return done(null, false, { message: "User not found." });

        if (!user.password)
          return done(null, false, {
            message: "Login with social media instead.",
          });

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return done(null, false, { message: "Invalid credentials." });
        }

        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);
