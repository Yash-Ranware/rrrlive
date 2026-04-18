import express from "express";
import { getCourses, create } from "./course.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

import { removeCourse } from "./course.controller.js";

import { updateCourse } from "./course.controller.js";

import { enrollCourse } from "./course.controller.js";

const router = express.Router();
// GET all courses
router.get("/", authMiddleware, getCourses);
// POST create course
router.post("/", authMiddleware, create);
// DELETE course
router.delete("/:id", authMiddleware, removeCourse);
// UPDATE course
router.put("/:id", authMiddleware, updateCourse);

// ENROLL in course
router.post("/:id/enroll", authMiddleware, enrollCourse);


export default router;