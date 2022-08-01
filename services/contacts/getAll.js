const contacts = require("../../models/contacts");

const getAll = async (pagination, query) => {
    try {
        const { page = 1, limit = 20 } = pagination;
        const skip = (page - 1) * limit;

        const result = await contacts
            .find(query, "", { skip, limit: Number(limit) })
            .populate("owner", "name email");

        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getAll;
