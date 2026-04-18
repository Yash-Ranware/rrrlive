import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Landing from "../features/shared/components/Landing";

import AdminDashboard from "../features/admin/dashboard/AdminDashboard";
import TeacherDashboard from "../features/teacher/dashboard/TeacherDashboard";
import StudentDashboard from "../features/student/dashboard/StudentDashboard";

import StudentCourses from "../features/student/courses/StudentCourses";
import CreateCourse from "../features/teacher/courses/CreateCourse";

import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";

import TeacherCourses from "../features/teacher/courses/TeacherCourses";
import AllCourses from "../features/student/courses/AllCourses";

const router = createBrowserRouter([
  // PUBLIC ROUTES
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // STUDENT
  {
    path: "/student",
    element: (
      <ProtectedRoute allowedRoles={["student"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <StudentDashboard /> },
      { path: "courses", element: <StudentCourses /> },
      { path: "browse", element: <AllCourses /> },
    ],
  },

  // TEACHER
  {
    path: "/teacher",
    element: (
      <ProtectedRoute allowedRoles={["teacher"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <TeacherDashboard /> },
      { path: "courses", element: <TeacherCourses /> }, // ✅ fixed
      { path: "create-course", element: <CreateCourse /> },
    ],
  },

  // ADMIN
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <AdminDashboard /> }],
  },
]);

export default router;