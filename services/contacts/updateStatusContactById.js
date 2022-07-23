const contacts = require("../../models/contacts");

const schemas = require("../../schemas/contactsSchema");

const updateStatusContactById = async (contactId, status) => {
    try {
        const { error } = schemas.updateFavorite.validate(status);

        if (error) {
            throw new Error("missing field favorite");
        }

        const updatedStatus = await contacts.findByIdAndUpdate(
            contactId,
            status,
            { new: true }
        );

        if (!updatedStatus) {
            throw new Error("not found");
        }

        return updatedStatus;
    } catch (error) {
        const { message } = error;

        console.log(message);

        return { message: message };
    }
};

module.exports = updateStatusContactById;
