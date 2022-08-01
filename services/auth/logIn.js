const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

const schemas = require("../../schemas/userSchema");

const { SECRET_KEY } = process.env;

const login = async (user) => {
    try {
        const { error } = schemas.logIn.validate(user);

        if (error) {
            throw error;
        }

        const { email, password } = user;

        const isUser = await User.findOne({ email });

        if (!isUser) {
            throw new Error("401");
        }

        const comparePassword = await bcrypt.compare(password, isUser.password);

        if (!comparePassword) {
            throw new Error("401");
        }

        const payload = {
            id: isUser._id,
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

        const newUser = await User.findByIdAndUpdate(isUser._id, { token });

        return newUser;
    } catch (error) {
        return error;
    }
};

module.exports = login;
