// const actions = require("../contacts");
const listContacts = require("./listContacts");

const updateContacts = require("./updateContacts");

const nanoid = require("nanoid");

const addContact = async ({ name, email, phone }) => {
    const contacts = await listContacts();

    const newContact = { id: nanoid(2), name, email, phone };

    contacts.push(newContact);

    await updateContacts(contacts);

    return newContact;
};

module.exports = addContact;
