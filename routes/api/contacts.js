const express = require("express");

const router = express.Router();
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
