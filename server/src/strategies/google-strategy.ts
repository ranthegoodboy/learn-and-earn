import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { db } from "../lib/db";

export default passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await db.user.findFirst({
          where: {
            googleId: profile.id,
          },
        });

        if (user) return done(null, user);

        const userEmailExists = await db.user.findUnique({
          where: {
            email: profile.emails?.[0].value,
          },
        });

        if (userEmailExists)
          return done(
            new Error("User already exist. Please login using credentials.")
          );

        const newUser = await db.user.create({
          data: {
            name: profile.displayName,
            email: profile.emails?.[0].value as string,
            googleId: profile.id,
            image: profile.photos?.[0].value,
          },
        });

        done(null, newUser);
      } catch (err) {
        done(err);
      }
    }
  )
);
