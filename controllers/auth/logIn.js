const userServices = require("../../services/auth");

const logIn = async (req, res) => {
    const user = req.body;

    const newUser = await userServices.logIn(user);

    const error = newUser.message;

    switch (error) {
        case '"email" is required':
            res.status(400).json({ message: error });

            break;
        case '"password" is required':
            res.status(400).json({ message: error });

            break;
        case "401":
            res.status(401).json({ message: "Wrong email or password" });
            break;

        default:
            res.status(200).json({
                token: newUser.token,
                user: {
                    email: newUser.email,
                    subscription: newUser.subscription,
                },
            });
            break;
    }
};

module.exports = logIn;
