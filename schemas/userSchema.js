const Joi = require("joi");

const registerSchema = Joi.object({
    password: Joi.string().min(3).required(),

    email: Joi.string()
        .pattern(/[a-z0-9]+@[a-z]+\.[a-z]{3,}/)
        .required(),
});

const logInSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const updateSubscriptionSchema = Joi.object({
    subscription: Joi.string().required(),
});

const userSchemas = {
    register: registerSchema,
    logIn: logInSchema,
    updateSubscription: updateSubscriptionSchema,
};

module.exports = userSchemas;
