// import "dotenv/config";
// import express from 'express';
// import Hello from "./Hello.js";
// import Lab5 from "./Lab5/index.js";
// import CourseRoutes from './Kanbas/Courses/routes.js';
// import ModuleRoutes from './Kanbas/Modules/routes.js';
// import cors from "cors";
// import mongoose from "mongoose";
// import UserRoutes from "./Users/routes.js";
// import AssignmentRoutes from './Kanbas/Assignments/routes.js';
// const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:127017/kanbas";
// mongoose.connect(CONNECTION_STRING);
// const app = express();
// app.use(cors());
// app.use(express.json());
// UserRoutes(app);
// AssignmentRoutes(app);
// ModuleRoutes(app);
// CourseRoutes(app);
// Lab5(app);
// Hello(app);
// app.listen(process.env.PORT || 4000);
import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import cors from "cors";

// Initialize Express app
const app = express();

// Configure CORS
app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Register routes
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

// Start the server on the specified port or default to 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});