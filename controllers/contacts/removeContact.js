const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const result = await contacts.removeContact(req.params.contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ status: "success", code: 200, message: "contact deleted" });
};
module.exports = removeContact;
