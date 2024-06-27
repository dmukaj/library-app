const Joi = require("joi");
const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  product: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        minlength: 5,
        maxlength: 255,
      },
      // title: {
      //   type: String,
      //   required: true,
      //   trim: true,
      //   minlength: 5,
      //   maxlength: 255,
      // },
      numberInStock: {
        type: Number,
      },
      quantity: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
      },
    },
  ],
});

function validatePurchase(purchase) {
  const schema = Joi.object({
    productId: Joi.string().min(5).max(255).required(),
    quantity: Joi.number().min(0).max(100).required(),
  });
  return schema.validate(purchase);
}

const Purchase = mongoose.model("Purchase", purchaseSchema);
exports.Purchase = Purchase;
exports.validate = validatePurchase;
