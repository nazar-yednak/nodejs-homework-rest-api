const Contact = require("../../models/contact");
const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ status: "success", code: 200, message: "contact deleted" });
};
module.exports = removeContact;
