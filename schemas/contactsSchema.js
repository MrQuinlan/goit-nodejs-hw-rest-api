const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    add: schema,
    updateFavorite: updateFavoriteSchema,
};

module.exports = schemas;
