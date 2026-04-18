import express from "express";
import cors from "cors";
import authRoutes from "./features/auth/auth.routes.js";
import courseRoutes from "./features/course/course.routes.js";


const app = express();

// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;