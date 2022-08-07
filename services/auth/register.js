const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const User = require("../../models/user");

const schemas = require("../../schemas/userSchema");

const register = async (user) => {
    try {
        const { error } = schemas.register.validate(user);

        if (error) {
            throw new Error("400");
        }

        const { email, password } = user;
        const isUser = await User.findOne({ email });

        if (isUser) {
            throw new Error("409");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const avatarURL = gravatar.url(email);

        const newUser = await User.create({
            ...user,
            password: hashPassword,
            avatarURL,
        });

        return newUser;
    } catch (error) {
        return error;
    }
};

module.exports = register;
