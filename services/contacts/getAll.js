const contacts = require("../../models/contacts");

const getAll = async () => {
    try {
        const result = await contacts.find();
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getAll;
