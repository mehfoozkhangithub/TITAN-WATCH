const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    category: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['Men', 'Women', 'Unisex'],
    },
    displayType: {
      type: String,
      enum: ['Analog', 'Digital', 'Smart'],
    },
    strapColor: {
      type: String,
    },
    caseWidth: {
      type: String,
    },
    caseThickness: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    features: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    warranty: {
      type: {
        type: String, // Manufacturer / Seller
      },
      duration: {
        type: String,
      },
    },
    waterResistance: {
      type: String,
    },
    caseAndBezelMaterial: {
      type: String,
    },
    weight: {
      type: String,
    },
    countryOfOrigin: {
      type: String,
    },
    bandMaterial: {
      type: String,
    },
    powerSupply: {
      type: String,
    },
    batteryLife: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
);

const ProductsModel = mongoose.model('products', ProductsSchema);

module.exports = { ProductsModel };
