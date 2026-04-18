import { NavLink } from "react-router-dom";
import { useAuth } from "../features/auth/authContext";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart,
  User
} from "lucide-react";

const Sidebar = () => {
  const { user } = useAuth();
  const role = user?.role;

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 px-4 py-2 bg-gray-800 border-l-4 border-blue-500 rounded"
      : "flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded";

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">RRR</h2>

      <ul className="space-y-2">

        {/* Dashboard */}
        <li>
          <NavLink to={`/${role}`} className={linkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
        </li>

        {/* ADMIN */}
        {role === "admin" && (
          <>
            <li>
              <NavLink to="/admin/users" className={linkClass}>
                <Users size={18} />
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/analytics" className={linkClass}>
                <BarChart size={18} />
                Analytics
              </NavLink>
            </li>
          </>
        )}

        {/* TEACHER */}
        {role === "teacher" && (
          <>
            <li>
              <NavLink to="/teacher/courses" className={linkClass}>
                <BookOpen size={18} />
                My Courses
              </NavLink>
            </li>

            <li>
              <NavLink to="/teacher/create-course" className={linkClass}>
                <BookOpen size={18} />
                Create Course
              </NavLink>
            </li>

            <li>
              <NavLink to="/teacher/students" className={linkClass}>
                <Users size={18} />
                Students
              </NavLink>
            </li>
          </>
        )}

        {/* STUDENT */}
        {role === "student" && (
          <>
            <li>
              <NavLink to="/student/courses" className={linkClass}>
                <BookOpen size={18} />
                My Courses
              </NavLink>
            </li>

            <li>
              <NavLink to="/student/browse" className={linkClass}>
                <BookOpen size={18} />
                Browse Courses
              </NavLink>
            </li>

            <li>
              <NavLink to="/student/progress" className={linkClass}>
                <BarChart size={18} />
                Progress
              </NavLink>
            </li>
          </>
        )}

        {/* Profile */}
        <li>
          <NavLink to={`/${role}/profile`} className={linkClass}>
            <User size={18} />
            Profile
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;