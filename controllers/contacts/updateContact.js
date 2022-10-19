const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const updateContact = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    throw RequestError(400, error.message);
  }
  const result = await contacts.updateContact(req.params.contactId, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ status: "success", code: 200, payload: { result } });
};
module.exports = updateContact;
