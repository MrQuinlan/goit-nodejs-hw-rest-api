const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");
const contactsPath = path.join(__dirname, "./contacts.json");

async function updateContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const products = JSON.parse(data);

    return products;
};

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);

    if (!result) {
        return null;
    }

    return result;
};

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const contactIndex = contacts.findIndex(
        (contact) => contact.id === contactId
    );

    if (contactIndex === -1) {
        return null;
    }

    const newContacts = contacts.filter((_, index) => index !== contactIndex);

    await updateContacts(newContacts);

    return contacts[contactIndex];
};

const addContact = async ({ name, email, phone }) => {
    const contacts = await listContacts();

    const newContact = { id: nanoid(2), name, email, phone };

    contacts.push(newContact);

    await updateContacts(contacts);

    return newContact;
};

const updateContact = async (contactId, body) => {
    const contacts = await listContacts();

    const idx = contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        return null;
    }

    contacts[idx] = { id: contactId, ...body };

    await updateContacts(contacts);

    return contacts[idx];
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
