const contactsServices = require("../../services/contacts");

const removeContactById = async (req, res) => {
    const { contactId } = req.params;

    const contact = await contactsServices.removeContactById(contactId);

    if (!contact) {
        return res.status(404).json({ message: "not found" });
    }

    res.json({ message: "contact deleted" });
};

module.exports = removeContactById;
