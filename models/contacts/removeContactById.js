const listContacts = require("./listContacts");

const updateContacts = require("./updateContacts");

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

module.exports = removeContact;
