const actions = require("../../models");

const getAll = async () => {
    try {
        const contacts = await actions.listContacts();
        return contacts;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getAll;
