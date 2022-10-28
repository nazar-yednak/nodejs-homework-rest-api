const express = require("express");

const router = express.Router();
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
