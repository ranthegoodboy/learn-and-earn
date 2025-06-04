import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourseOverview,
  listCourses,
  myCourses,
} from "../controllers/courseController";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";

const router = express.Router();

router.get("/", listCourses);
router.get("/my-courses", ensureAuthenticated, myCourses);
router.get("/:courseId", getCourseOverview);
router.post("/", ensureAuthenticated, createCourse);
router.delete("/", ensureAuthenticated, deleteCourse);

//router.get("/:courseId/details", getCourseOverview);

export default router;
