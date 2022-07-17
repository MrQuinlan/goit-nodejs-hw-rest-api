const actions = require("../../models");

const contactAddSchema = require("../../schemas/contactsSchema");

const addContact = async (contact) => {
    try {
        const { error } = contactAddSchema.validate(contact);

        if (error) {
            throw error;
        }

        const newContact = await actions.addContact(contact);

        return newContact;
    } catch (error) {
        console.log(error);
    }
};

module.exports = addContact;
