const contacts = require("../../models/contacts");

const schemas = require("../../schemas/contactsSchema");

const addContact = async (contact) => {
    try {
        const { error } = schemas.add.validate(contact);

        if (error) {
            throw error;
        }

        const newContact = await contacts.create(contact);

        return newContact;
    } catch (error) {
        console.log(error);
    }
};

module.exports = addContact;
