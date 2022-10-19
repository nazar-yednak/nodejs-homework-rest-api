const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const result = await contacts.getContactById(req.params.contactId);

  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ status: "success", code: 200, payload: { result } });
};
module.exports = getContactById;
