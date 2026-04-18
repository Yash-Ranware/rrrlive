import {
  getAllCourses,
  createCourse,
  deleteCourseById,
  updateCourseById,
  enrollInCourse,
} from "./course.service.js";

// ✅ GET courses (FINAL - only one)
export const getCourses = async (req, res) => {
  try {
    const type = req.query.type; // 👈 important

    const courses = await getAllCourses(req.user, type);

    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE
export const create = async (req, res) => {
  try {
    const course = await createCourse({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE
export const removeCourse = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteCourseById(id, req.user);

    res.json({
      success: true,
      message: "Course deleted",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ UPDATE
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCourse = await updateCourseById(
      id,
      req.body,
      req.user
    );

    res.json({
      success: true,
      data: updatedCourse,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ ENROLL
export const enrollCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await enrollInCourse(id, req.user.id);

    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};