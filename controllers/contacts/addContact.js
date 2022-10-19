const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json({ status: "success", code: 200, payload: { result } });
};
module.exports = addContact;
