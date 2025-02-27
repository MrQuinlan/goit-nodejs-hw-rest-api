const contacts = require("../../models/contacts");

const schemas = require("../../schemas/contactsSchema");

const updateContactById = async (contactId, contact) => {
    try {
        const { error } = schemas.add.validate(contact);

        if (error) {
            throw new Error("missing fields");
        }

        const updatedContact = await contacts.findByIdAndUpdate(
            contactId,
            contact,
            { new: true }
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
