import bodyParser from "body-parser";
import MongoStore from "connect-mongo";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import authRoutes from "./routes/authRoutes";
import courseRoutes from "./routes/courseRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import userRoutes from "./routes/userRoutes";
import "./strategies/google-strategy";
import "./strategies/local-strategy";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: process.env.CLIENT_URL as string,
    credentials: true,
  })
);
app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15mins
  max: 100,
  legacyHeaders: false,
});
app.use(limiter);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      ttl: 60 * 60 * 24 * 7, // 1 week
      autoRemove: "native",
      crypto: {
        secret: process.env.SESSION_SECRET as string,
      },
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      httpOnly: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

const port = process.env.PORT || 3001;
if (!isProduction) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
