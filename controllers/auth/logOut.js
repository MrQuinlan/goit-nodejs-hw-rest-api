const userServices = require("../../services/auth");

const logOut = async (req, res) => {
    const user = req.user;

    await userServices.logOut(user);

    res.status(204).send();
};

module.exports = logOut;
