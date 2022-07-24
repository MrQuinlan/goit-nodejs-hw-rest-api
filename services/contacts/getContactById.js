const contacts = require("../../models/contacts");

const getContactById = async (contactId) => {
    try {
        const contact = await contacts.findById(contactId);

        if (!contact) {
            throw new Error("not found");
        }

        return contact;
    } catch (error) {
        const { message } = error;
        console.log(message);
    }
};

module.exports = getContactById;
