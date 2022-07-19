const listContacts = require("./contacts/listContacts");
const getContactById = require("./contacts/getContactById");
const removeContactById = require("./contacts/removeContactById");
const addContact = require("./contacts/addContact");
const updateContactById = require("./contacts/updateContactById");

module.exports = {
    listContacts,
    getContactById,
    removeContactById,
    addContact,
    updateContactById,
};
