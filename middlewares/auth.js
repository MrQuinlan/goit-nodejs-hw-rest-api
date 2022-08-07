const jwt = require("jsonwebtoken");

const User = require("../models/user");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;

    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(new Error("Not authorized"));
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);

        const user = await User.findById(id);

        if (!user || !user.token) {
            res.status(401).json({ message: "Not authorized" });

            return;
        }

        req.user = user;

        next();
    } catch (error) {
        next(error.message);
    }
};

module.exports = auth;
