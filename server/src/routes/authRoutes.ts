import express from "express";
import passport from "passport";
import {
  authenticationStatus,
  login,
  logout,
  register,
} from "../controllers/authController";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";
import { registerValidator } from "../validators/userValidators";

const router = express.Router();
router.post("/login", login);
router.get("/status", ensureAuthenticated, authenticationStatus);
router.post("/register", registerValidator, register);
router.get("/logout", logout);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}${process.env.DEFAULT_LOGIN_ROUTE}`,
  }),
  (req, res) => {
    res.redirect(
      `${process.env.CLIENT_URL}${process.env.DEFAULT_LOGIN_REDIRECT}`
    );
  }
);

export default router;
