import { body } from "express-validator";

export const registerValidator = [
  body("name").notEmpty().withMessage("Name is required").trim(),

  body("email")
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
];

export const updateUserProfileValidator = [
  body("name").notEmpty().withMessage("Name is required").trim(),
  body("about")
    .optional()
    .isString()
    .withMessage("About must be a text description"),
  body("experiences")
    .optional()
    .isArray()
    .withMessage("Experiences must be provided as a list"),
  body("education")
    .optional()
    .isArray()
    .withMessage("Education must be provided as a list"),
];
