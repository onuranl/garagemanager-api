const joi = require("joi");

module.exports = joi.defaults((schema) => {
  return schema.options({
    abortEarly: false,
    errors: {
      wrap: {
        label: false,
      },
    },
  });
});