import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/authContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();            // clear auth
    navigate("/login");  // redirect once
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-4">
      <h1 className="font-semibold">Dashboard</h1>

      <button onClick={handleLogout} className="text-red-500">
        Logout
      </button>
    </div>
  );
};

export default Topbar;