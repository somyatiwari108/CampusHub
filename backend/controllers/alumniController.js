import AlumniProfile from "../models/AlumniProfile.js";

// POST /api/alumni  (alumni creates their own profile)
export const createProfile = async (req, res) => {
  try {
    const existing = await AlumniProfile.findOne({ user: req.user._id });
    if (existing) {
      return res.status(409).json({ message: "Profile already exists for this user" });
    }

    const profile = await AlumniProfile.create({ ...req.body, user: req.user._id });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to create profile", error: error.message });
  }
};

// GET /api/alumni  (search + filter, used by the directory page)
export const getAllProfiles = async (req, res) => {
  try {
    const { search, branch, company, year } = req.query;
    const filter = {};

    if (branch) filter.branch = branch;
    if (company) filter.company = company;
    if (year) filter.graduationYear = Number(year);

    let query = AlumniProfile.find(filter).populate("user", "name email avatarUrl");

    const profiles = await query;

    // Simple text search across name/company (populate happens above, so filter in JS)
    const filtered = search
      ? profiles.filter(
          (p) =>
            p.user.name.toLowerCase().includes(search.toLowerCase()) ||
            p.company.toLowerCase().includes(search.toLowerCase())
        )
      : profiles;

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch alumni", error: error.message });
  }
};

// GET /api/alumni/:id
export const getProfileById = async (req, res) => {
  try {
    const profile = await AlumniProfile.findById(req.params.id).populate("user", "name email avatarUrl");
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile", error: error.message });
  }
};