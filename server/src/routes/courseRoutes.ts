import express from "express";
import {
  getCourseOverview,
  listCourses,
} from "../controllers/courseController";

const router = express.Router();

router.get("/", listCourses);
router.get("/:courseId", getCourseOverview);

export default router;
