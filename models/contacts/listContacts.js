const fs = require("fs/promises");

const contactsPath = require("./contactsFilePath");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const products = JSON.parse(data);

    return products;
};

module.exports = listContacts;
