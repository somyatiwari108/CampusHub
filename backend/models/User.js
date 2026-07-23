import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "alumni", "admin"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  // 1. Removed 'next' from the arguments above
  
  if (!this.isModified("password")) {
    return; // 2. Changed 'return next()' to just 'return'
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // 3. Removed the 'next()' call from here entirely
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema)