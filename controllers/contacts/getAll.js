const contactsServices = require("../../services/contacts");

const getAll = async (_, res) => {
    const contacts = await contactsServices.getAll();

    res.json(contacts);
};

module.exports = getAll;
