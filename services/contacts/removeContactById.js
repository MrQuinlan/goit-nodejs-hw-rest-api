const contacts = require("../../models/contacts");

const removeContactById = async (contactId) => {
    try {
        const contact = await contacts.findByIdAndRemove(contactId);

        if (!contact) {
            throw new Error("not found");
        }

        return contact;
    } catch (error) {
        const { message } = error;

        console.log(message);
    }
};

module.exports = removeContactById;
