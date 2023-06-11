import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 6,
    },
    phoneNumber: {
      type: Number,
      minLength: 10,
      maxLength: 10,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email is already taken"],
      lowerCase: true,
    },
    password: {
      type: String,
      minLength: 8,
      maxLength: 64,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
