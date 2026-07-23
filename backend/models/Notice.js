import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "exam",
        "holiday",
        "internship",
        "placement",
        "scholarship",
        "workshop",
        "hackathon",
        "society",
      ],
      required: true,
    },
    important: { type: Boolean, default: false },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Notice", noticeSchema);