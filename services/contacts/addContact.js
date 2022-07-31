const contacts = require("../../models/contacts");

const schemas = require("../../schemas/contactsSchema");

const addContact = async (contact, owner) => {
    try {
        const { error } = schemas.add.validate(contact);

        if (error) {
            throw error;
        }

        const newContact = await contacts.create({ ...contact, owner });

        return newContact;
    } catch (error) {
        console.log(error);
    }
};

module.exports = addContact;
