import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { db } from "../lib/db";

export const userProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        googleId: true,
        emailVerified: true,
        name: true,
        email: true,
        image: true,
        about: true,
        experiences: true,
        education: true,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "User retrieved successfully", data: user });
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

export const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const { name, about, experiences, education, image } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const existingUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const updatedUser = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name ?? undefined,
        about: about ?? undefined,
        experiences: experiences ?? undefined,
        education: education ?? undefined,
        image: image ?? undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        about: true,
        experiences: true,
        education: true,
      },
    });

    res.status(200).json({
      message: "User profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Error updating user profile", error });
  }
};
