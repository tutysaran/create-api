const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    images: [String],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
   
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model('Product', ProductSchema);
