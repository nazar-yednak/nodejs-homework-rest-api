const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt  -updateAd", {
    skip,
    limit,
  }).populate("owner", "name  email");
  res.json({ status: "success", code: 200, payload: { result } });
};
module.exports = listContacts;
