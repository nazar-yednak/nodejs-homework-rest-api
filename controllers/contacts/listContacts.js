const contacts = require("../../models/contacts");

const listContacts = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json({ status: "success", code: 200, payload: { result } });
};
module.exports = listContacts;
