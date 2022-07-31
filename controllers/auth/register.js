const userServices = require("../../services/auth");

const register = async (req, res) => {
    const user = req.body;

    const newUser = await userServices.register(user);

    const error = newUser.message;

    switch (error) {
        case "400":
            res.status(400).json({ message: "missing required name field" });

            break;
        case "409":
            res.status(409).json({ message: "Email in use" });
            break;

        default:
            res.status(201).json({
                email: newUser.email,
                subscription: newUser.subscription,
            });
            break;
    }
};

module.exports = register;
