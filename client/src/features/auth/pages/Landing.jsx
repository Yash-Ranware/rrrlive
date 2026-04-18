import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-bold">Welcome to RRR App</h1>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;