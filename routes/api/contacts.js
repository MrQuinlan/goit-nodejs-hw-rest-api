const express = require("express");

const ctrlWrapper = require("../../helpers/controlsWrapper");

const router = express.Router();

const contactsControllers = require("../../controllers/contacts");

router.get("/", ctrlWrapper(contactsControllers.getAll));

router.get("/:contactId", ctrlWrapper(contactsControllers.getContactById));

router.post("/", ctrlWrapper(contactsControllers.addContact));

router.delete(
    "/:contactId",
    ctrlWrapper(contactsControllers.removeContactById)
);

router.put("/:contactId", ctrlWrapper(contactsControllers.updateContactById));

router.patch(
    "/:contactId/favorite",
    ctrlWrapper(contactsControllers.updateStatusContactById)
);

module.exports = router;
