const authServices = require("../../services/auth");

const chAvatar = async (req, res) => {
    const data = {
        _id: req.user._id,
        path: req.file.path,
        name: req.file.originalname,
    };

    const chAvatar = await authServices.chAvatar(data);

    const error = chAvatar.message;

    switch (error) {
        case "not found":
            res.status(400).json({ message: "Not authorized" });
            break;

        default:
            res.status(200).json(chAvatar);
    }
};

module.exports = chAvatar;
