const contactsServices = require("../../services/contacts");

const getContactById = async (req, res) => {
    const { contactId } = req.params;

    const contact = await contactsServices.getContactById(contactId);

    if (!contact) {
        return res.status(404).json({ message: "not found" });
    }

    res.json(contact);
};

module.exports = getContactById;
