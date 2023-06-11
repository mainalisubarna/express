import express from "express";
const router = express.Router();
import User from "../Modal/user.modal.js";
import mongoose from "mongoose";

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: true,
      data: users,
      message: "User fetched Successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/users", async (req, res) => {
  try {
    const body = req.body;
    const newUserDetails = await User.create(body);
    if (newUserDetails) {
      res.status(200).json({
        status: true,
        data: { id: newUserDetails._id },
        message: "User created successfully",
      });
    } else {
      res.status(300).json({
        status: false,
        message: "Something went wrong",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/users/:userId", async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);
    const userDetails = await User.findOne({ _id: userId });
    if (userDetails) {
      res.status(200).json({
        status: true,
        data: userDetails,
        message: "Product Fetched Successfully",
      });
    } else {
      res.status(401).json({
        status: false,
        message: "Product Not Found",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
