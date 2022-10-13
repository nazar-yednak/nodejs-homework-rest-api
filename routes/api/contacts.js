const express = require("express");

const Joi = require("joi");
const router = express.Router();
const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json({ status: "success", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const result = await contacts.getContactById(req.params.contactId);

    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ status: "success", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);

    if (error) {
      throw RequestError(400, error.message);
    }
    const result = await contacts.addContact(req.body);

    res.status(201).json({ status: "success", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const result = await contacts.removeContact(req.params.contactId);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ status: "success", code: 200, message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);

    if (error) {
      throw RequestError(400, error.message);
    }
    const result = await contacts.updateContact(req.params.contactId, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ status: "success", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
