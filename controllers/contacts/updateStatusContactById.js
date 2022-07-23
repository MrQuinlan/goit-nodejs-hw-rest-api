const contactsServices = require("../../services/contacts");

const updateStatusContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const { body } = req;

    const updatedStatus = await contactsServices.updateStatusContactById(
        contactId,
        body
    );

    const error = updatedStatus.message;

    switch (error) {
        case "not found":
            res.status(404).json({ message: "not found" });
            break;

        case "missing field favorite":
            res.status(400).json(updatedStatus);
            break;

        default:
            res.status(200).json(updatedStatus);
    }
};

module.exports = updateStatusContactById;
