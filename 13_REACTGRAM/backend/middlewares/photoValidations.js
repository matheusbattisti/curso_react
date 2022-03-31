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

const photoUpdateValidation = () => {
  return [
    body("image")
      .optional()
      .custom((value, { req }) => {
        if (!req.file) {
          throw new Error("A imagem é obrigatória");
        }
        return true;
      }),
    body("title").optional().isString().withMessage("O título é obrigatório"),
  ];
};

const commentValidation = () => {
  return [body("comment").isString().withMessage("O comentário é obrigatório")];
};

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
};
