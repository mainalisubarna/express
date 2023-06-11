import express from "express";
import "dotenv/config.js";
import { dbConnection } from "./config/db.config.js";
import userRouter from "./Router/user.router.js";

// dotenv.config();
const app = express();

const PORT = process.env.PORT;
dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRouter);
