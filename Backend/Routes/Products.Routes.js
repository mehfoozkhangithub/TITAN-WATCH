const express = require('express');

const { ProductsModel } = require('../Model/Products.model');

const productsRoutes = express.Router();
//* read

// http//localhost:3000/products

productsRoutes.get('/', async (req, res) => {
  try {
    const dbDATA = await ProductsModel.find();
    console.log('🚀 ~ dbDATA:', dbDATA);
    res.status(200).send(dbDATA);
  } catch (error) {
    console.log('🚀 ~ error:', error);
    res
      .status(404)
      .send({ msg: 'not create notes...something went wrong', errro: err });
  }
});

module.exports = { productsRoutes };
