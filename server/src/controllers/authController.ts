import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import passport from "passport";
import { db } from "../lib/db";

export const login = async (req: Request, res: Response): Promise<void> => {
  passport.authenticate("local", (error: any, user: any, info: any) => {
    if (error)
      return res.status(500).json({ message: "Error during authentication." });

    if (!user) return res.status(401).json(info);

    req.login(user, (err) => {
      if (err) return res.status(500).json({ message: "Error during login." });
      return res.status(200).json({
        message: "User logged in successfully",
        user: { id: user.id, email: user.email },
      });
    });
  })(req, res);
};

export const authenticationStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = req.user as {
    id: string;
    name: string;
    email: string;
    image: string | null;
  };
  res.status(200).json({
    message: "User is authenticated",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    },
  });
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    req.body;
    const { name, email, password } = req.body;

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      res.status(400).json({ message: "Email already in use." });
      return;
    }

    const user = await db.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      },
    });

    res.status(201).json({
      message: "User registered successfully.",
      data: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user:", error });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Error during logout." });
    return res.status(204).send();
  });
};
