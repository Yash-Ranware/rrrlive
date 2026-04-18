import app from "./app.js";
import { connectDB } from "./config/db.js";
import { config } from "./config/env.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.PORT, () => {
      console.log(`🚀 Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
  }
};

startServer();