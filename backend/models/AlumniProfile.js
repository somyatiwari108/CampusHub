import mongoose from "mongoose";

const alumniProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    photo: { type: String, default: "" },
    graduationYear: { type: Number, required: true },
    branch: { type: String, required: true },
    company: { type: String, default: "" },
    position: { type: String, default: "" },
    location: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    internshipJourney: { type: String, default: "" },
    placementStory: { type: String, default: "" },
    higherStudies: { type: String, default: "" },
    tipsForJuniors: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("AlumniProfile", alumniProfileSchema);