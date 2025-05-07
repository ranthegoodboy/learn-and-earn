import { Request, Response } from "express";

export const ensureAuthenticated = async (
  req: Request,
  res: Response,
  next: () => void
): Promise<void> => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  res
    .status(401)
    .json({ message: "You must be authenticated to access this resource." });
};
