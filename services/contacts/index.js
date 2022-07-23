const getAll = require("./getAll");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContactById = require("./removeContactById");
const updateContactById = require("./updateContactById");
const updateStatusContactById = require("./updateStatusContactById");

module.exports = {
    getAll,
    getContactById,
    addContact,
    removeContactById,
    updateContactById,
    updateStatusContactById,
};
