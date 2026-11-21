import express from "express";
import { getLeetCodeDashboard } from "./routes/leetcode.js";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = 5000;
import { getGitHubDashboard } from "./routes/github.js";
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running!",
  });
});

app.get("/api/leetcode/", getLeetCodeDashboard);
app.get("/api/github", getGitHubDashboard);
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
