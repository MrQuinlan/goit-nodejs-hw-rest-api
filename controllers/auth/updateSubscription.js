const authServices = require("../../services/auth");

const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    const { body } = req;

    const updatedSubscription = await authServices.updateSubscription(
        _id,
        body
    );

    const error = updatedSubscription.message;

    switch (error) {
        case "not found":
            res.status(404).json({ message: "not found" });
            break;

        case "missing field favorite":
            res.status(400).json(updatedSubscription);
            break;

        default:
            res.status(200).json(updatedSubscription);
    }
};

module.exports = updateSubscription;
