const express = require("express");
const router = express.Router();

const ctrlWrapper = require("../../helpers/controlsWrapper");

const { auth, upload } = require(`../../middlewares`);

const authControllers = require("../../controllers/auth");

router.post("/signup", ctrlWrapper(authControllers.register));

router.post("/login", ctrlWrapper(authControllers.logIn));

router.get("/logout", auth, ctrlWrapper(authControllers.logOut));

router.get("/current", auth, ctrlWrapper(authControllers.getCurrent));

router.patch("/", auth, ctrlWrapper(authControllers.updateSubscription));

router.patch(
    "/avatars",
    auth,
    upload.single("avatar"),
    ctrlWrapper(authControllers.chAvatar)
);

module.exports = router;
