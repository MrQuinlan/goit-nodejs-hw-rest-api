const actions = require("../../models");

const getContactById = async (contactId) => {
    try {
        const contact = await actions.getContactById(contactId);

        if (!contact) {
            throw new Error("not111111111 found");
        }

        return contact;
    } catch (error) {
        const { message } = error;
        console.log(message);
    }
};

module.exports = getContactById;
