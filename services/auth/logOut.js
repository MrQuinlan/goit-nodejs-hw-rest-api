const User = require("../../models/user");

const logOut = async (user) => {
    try {
        const { _id } = user;
        await User.findByIdAndUpdate(_id, { token: "" });
    } catch (error) {
        return error;
    }
};

module.exports = logOut;
