const express = require("express");

const router = express.Router();

const actions = require("../../models/contacts");

const Joi = require("joi");

const contactAddSchema = Joi.object({
    name: Joi.string().required(),
    // phone: Joi.number().min(0.01).required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
    try {
        const contacts = await actions.listContacts();
        res.json(contacts);
    } catch (error) {
        next(error);
    }
});

router.get("/:contactId", async (req, res, next) => {
    const { contactId } = req.params;

    try {
        const contact = await actions.getContactById(contactId);

        if (!contact) {
            throw new Error("not found");
        }
        res.json(contact);
    } catch (error) {
        const { message } = error;

        res.status(404).json({ message: message });
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { error } = contactAddSchema.validate(req.body);

        if (error) {
            throw error;
        }

        const newContact = await actions.addContact(req.body);

        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: "missing required name field" });
    }
});

router.delete("/:contactId", async (req, res, next) => {
    try {
        const { contactId } = req.params;

        const contact = await actions.removeContact(contactId);

        if (!contact) {
            throw new Error("not found");
        }

        res.json({ message: "contact deleted" });
    } catch (error) {
        const { message } = error;

        res.status(404).json({ message: message });
    }
});

router.put("/:contactId", async (req, res, next) => {
    try {
        const { error } = contactAddSchema.validate(req.body);

        if (error) {
            res.status(400);
            throw new Error("missing fields");
        }

        const updatedContact = await actions.updateContact(
            req.params.contactId,
            req.body
        );

        if (!updatedContact) {
            res.status(404);
            throw new Error("Not found");
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        const { message } = error;
        const { statusCode } = res;
        res.status(statusCode).json({ message: message });
    }
});

module.exports = router;
