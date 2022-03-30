const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória");
      }
      return true;
    }),
    body("title").isString().withMessage("O título é obrigatório"),
  ];
};

module.exports = {
  photoInsertValidation,
};
