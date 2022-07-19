const fs = require("fs/promises");

const contactsPath = require("./contactsFilePath");

async function updateContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = updateContacts;
