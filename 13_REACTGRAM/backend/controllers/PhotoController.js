const Photo = require("../models/Photo");

const mongoose = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Create photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
  });

  // If user was photo sucessfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um erro, por favor tente novamente mais tarde."],
    });
    return;
  }

  res.status(201).json(newPhoto);
};

// Remove a photo from the DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  console.log(id);
  console.log(reqUser);

  const photo = await Photo.findById(mongoose.Types.ObjectId(id));

  // Check if photo exists
  if (!photo) {
    res.status(422).json({ errors: ["Foto não encontrada!"] });
    return;
  }

  console.log(reqUser._id);
  console.log(photo.userId);

  // Check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  await Photo.deleteOne(photo._id);

  res.status(200).json({ message: "Foto excluída com sucesso." });
};

module.exports = {
  insertPhoto,
  deletePhoto,
};
