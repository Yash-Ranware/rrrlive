import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  // not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // decode JWT
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = payload.role;

    // role not allowed
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;