const actions = require("../../models");

const removeContactById = async (contactId) => {
    try {
        const contact = await actions.removeContactById(contactId);

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
