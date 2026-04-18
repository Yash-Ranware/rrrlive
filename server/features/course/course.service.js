import Course from "./course.model.js";

// 🔥 GET courses (role-based FINAL)
export const getAllCourses = async (user, type) => {
  if (user.role === "teacher") {
    return await Course.find({ createdBy: user.id });
  }

  if (user.role === "student") {
    if (type === "all") {
      return await Course.find(); // browse all
    }

    return await Course.find({ students: user.id }); // my courses
  }

  return await Course.find(); // admin
};

// 🔥 CREATE course
export const createCourse = async (data) => {
  return await Course.create(data);
};

// 🔥 DELETE course
export const deleteCourseById = async (courseId, user) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  if (course.createdBy.toString() !== user.id) {
    throw new Error("Not authorized");
  }

  await course.deleteOne();

  return true;
};

// 🔥 UPDATE course
export const updateCourseById = async (courseId, data, user) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  if (course.createdBy.toString() !== user.id) {
    throw new Error("Not authorized");
  }

  course.title = data.title || course.title;
  course.description = data.description || course.description;

  await course.save();

  return course;
};

// 🔥 ENROLL in course
export const enrollInCourse = async (courseId, userId) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  if (course.students.includes(userId)) {
    throw new Error("Already enrolled");
  }

  course.students.push(userId);
  await course.save();

  return course;
}; 