const contactsServices = require("../../services/contacts");

const getAll = async (req, res) => {
    const { favorite = null, page = 1, limit = 20 } = req.query;
    const { id: owner } = req.user;

    if (favorite) {
        const contacts = await contactsServices.getAll(
            { page, limit },
            { favorite, owner }
        );

        return res.json(contacts);
    }

    const contacts = await contactsServices.getAll({ limit, page }, { owner });

    res.json(contacts);
};

module.exports = getAll;
