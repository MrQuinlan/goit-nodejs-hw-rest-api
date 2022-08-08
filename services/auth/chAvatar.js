const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

const user = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const chAvatar = async ({ _id, path: tempPath, name }) => {
    try {
        const [extension] = name.split(".").reverse();

        const avatarName = `${_id}.${extension}`;

        const uploadPath = path.join(avatarsDir, avatarName);

        jimp.read(tempPath, (error, avatar) => {
            if (error) throw error;
            avatar.resize(250, 250).write(uploadPath);
        });

        await fs.rename(tempPath, uploadPath);

        const avatarURL = path.join("avatars", avatarName);

        await user.findByIdAndUpdate(_id, { avatarURL });

        return avatarURL;
    } catch (error) {
        await fs.unlink(tempPath);

        throw error;
    }
};

module.exports = chAvatar;
