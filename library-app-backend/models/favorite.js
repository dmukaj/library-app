// const Joi = require("joi");
// const mongoose = require("mongoose");

// const favoriteSchema = new mongoose.Schema({
//   favorite: [
//     {
//       _id: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         minlength: 5,
//         maxlength: 255,
//       },
//       title: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 5,
//         maxlength: 255,
//       },
//       imageLink: {
//         type: String,
//         default: false,
//       },
//     },
//   ],
// });

// function validateFavorite(favorite) {
//   const schema = Joi.object({
//     _id: Joi.string().min(5).max(255).required(),
//     title: Joi.string().min(5).max(225).required(),
//     imageLink: Joi.string().required(),
//   });
//   return schema.validate(favorite);
// }

// const Favorite = mongoose.model("Favorite", favoriteSchema);
// exports.Favorite = Favorite;
// exports.validate = validateFavorite;
