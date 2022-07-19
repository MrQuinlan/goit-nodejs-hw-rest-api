const express = require("express");

const router = express.Router();

const contactsControllers = require("../../controllers/contacts");

router.get("/", contactsControllers.getAll);

router.get("/:contactId", contactsControllers.getContactById);

router.post("/", contactsControllers.addContact);

router.delete("/:contactId", contactsControllers.removeContactById);

router.put("/:contactId", contactsControllers.updateContactById);

module.exports = router;
