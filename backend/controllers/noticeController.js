import Notice from "../models/Notice.js";

// POST /api/notices  (only teacher/admin can post)
export const createNotice = async (req, res) => {
  try {
    const { title, description, category, important } = req.body;

    const notice = await Notice.create({
      title,
      description,
      category,
      important,
      postedBy: req.user._id,
    });

    res.status(201).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create notice", error: error.message });
  }
};

// GET /api/notices  (everyone can view, optional category filter)
export const getAllNotices = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};

    const notices = await Notice.find(filter)
      .populate("postedBy", "name role")
      .sort({ createdAt: -1 });

    res.json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch notices", error: error.message });
  }
};

// DELETE /api/notices/:id  (only the poster or admin can delete)
export const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    if (notice.postedBy.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "You can't delete this notice" });
    }

    await notice.deleteOne();
    res.json({ message: "Notice deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete notice", error: error.message });
  }
};