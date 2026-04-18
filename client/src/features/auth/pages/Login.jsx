import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../authService";
import { useAuth } from "../authContext";

const Login = () => {
  const navigate = useNavigate();

  const { login: loginUser } = useAuth(); // ✅ FIX

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);

      const { token, user } = res.data.data;

      // ✅ use context login
      loginUser({ token, user });

      // redirect based on role
      if (user.role === "admin") navigate("/admin");
      else if (user.role === "teacher") navigate("/teacher");
      else navigate("/student");

    } catch (err) {
      console.error(err.response?.data?.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2>Login</h2>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;