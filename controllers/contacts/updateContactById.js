const contactsServices = require("../../services/contacts");

const updateContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const { body } = req;

    const updatedContact = await contactsServices.updateContactById(
        contactId,
        body
    );

    const error = updatedContact.message;

    switch (error) {
        case "not found":
            res.status(404).json({ message: "not found" });
            break;

        case "missing fields":
            res.status(400).json(updatedContact);
            break;

        default:
            res.status(200).json(updatedContact);
    }
};

module.exports = updateContactById;
