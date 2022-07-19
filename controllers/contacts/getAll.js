const contactsServices = require("../../services/contacts");

const getAll = async (req, res, next) => {
    const contacts = await contactsServices.getAll();

    res.json(contacts);
};

module.exports = getAll;
