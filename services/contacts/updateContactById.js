const actions = require("../../models");

const contactAddSchema = require("../../schemas/contactsSchema");

const updateContactById = async (contactId, contact) => {
    try {
        const { error } = contactAddSchema.validate(contact);

        if (error) {
            throw new Error("missing fields");
        }

        const updatedContact = await actions.updateContactById(
            contactId,
            contact
        );

        if (!updatedContact) {
            throw new Error("not found");
        }

        return updatedContact;
    } catch (error) {
        const { message } = error;

        console.log(message);

        return { message: message };
    }
};

module.exports = updateContactById;
