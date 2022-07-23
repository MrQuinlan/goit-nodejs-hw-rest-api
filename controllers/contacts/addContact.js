const contactsServices = require("../../services/contacts");

const addContact = async (req, res) => {
    const contact = req.body;

    const newContact = await contactsServices.addContact(contact);

    if (!newContact) {
        return res.status(400).json({ message: "missing required name field" });
    }

    res.status(201).json(newContact);
};

module.exports = addContact;
