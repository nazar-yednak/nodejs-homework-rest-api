const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json({ status: "success", code: 200, payload: { result } });
};
module.exports = addContact;
