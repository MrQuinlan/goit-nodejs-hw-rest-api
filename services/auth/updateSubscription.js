const User = require("../../models/user");

const schemas = require("../../schemas/userSchema");

const updateSubscription = async (id, subscription) => {
    try {
        const { error } = schemas.updateSubscription.validate(subscription);

        if (error) {
            throw new Error("missing field subscription");
        }

        const updatedSubscription = await User.findByIdAndUpdate(
            id,
            subscription,
            {
                new: true,
            }
        );

        if (!updatedSubscription) {
            throw new Error("not found");
        }

        return updatedSubscription;
    } catch (error) {
        const { message } = error;

        console.log(message);

        return { message: message };
    }
};

module.exports = updateSubscription;
