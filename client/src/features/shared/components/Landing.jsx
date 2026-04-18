import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to RRR Platform</h1>

      <p className="mb-8 text-gray-600">
        Learn. Teach. Grow.
      </p>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;