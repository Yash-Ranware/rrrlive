import { useState } from "react";
import api from "../../../services/apiClient";

const CreateCourse = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/courses", form);
      alert("Course created!");

      setForm({ title: "", description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;