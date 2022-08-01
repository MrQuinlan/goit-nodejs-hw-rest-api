const express = require("express");

const ctrlWrapper = require("../../helpers/controlsWrapper");

const router = express.Router();

const { auth } = require("../../middlewares/auth");

const authControllers = require("../../controllers/auth");

router.post("/signup", ctrlWrapper(authControllers.register));

router.post("/login", ctrlWrapper(authControllers.logIn));

router.get("/logout", auth, ctrlWrapper(authControllers.logOut));

router.get("/current", auth, ctrlWrapper(authControllers.getCurrent));

router.patch("/", auth, ctrlWrapper(authControllers.updateSubscription));

module.exports = router;
