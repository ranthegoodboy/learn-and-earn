import express from "express";
import { updateUserProfile, userProfile } from "../controllers/userController";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";
import { updateUserProfileValidator } from "../validators/userValidators";

const router = express.Router();

router.get("/:userId", ensureAuthenticated, userProfile);
router.put(
  "/:userId",
  ensureAuthenticated,
  updateUserProfileValidator,
  updateUserProfile
);

export default router;
