const express = require("express");

const ctrlWrapper = require("../../helpers/controlsWrapper");

const { auth } = require("../../middlewares");

const router = express.Router();

const contactsControllers = require("../../controllers/contacts");

router.get("/", auth, ctrlWrapper(contactsControllers.getAll));

router.get("/:contactId", ctrlWrapper(contactsControllers.getContactById));

router.post("/", auth, ctrlWrapper(contactsControllers.addContact));

router.delete(
    "/:contactId",
    ctrlWrapper(contactsControllers.removeContactById)
);

router.put("/:contactId", ctrlWrapper(contactsControllers.updateContactById));

router.patch(
    "/:contactId/favorite",
    auth,
    ctrlWrapper(contactsControllers.updateStatusContactById)
);

module.exports = router;
