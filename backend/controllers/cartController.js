const Cart = require("../models/cartModel");
const mongoose = require("mongoose");

const addCart = async (req, res) => {

  var cartObj = {
    userId: req.body.userId,
    cart: req.body.cart,
  };

  const item = await Cart.find({
    userId: req.body.userId,
    cart: { $elemMatch: { productId: req.body.cart.productId } },
  });
  const userCart = await Cart.find({
    userId: req.body.userId,
  });

  if (userCart.length === 0) {
    const cart = await Cart.create(cartObj).catch((error) => {
      return res.status(404).json({ error: error.message });
    });
    return res.status(200).json(cart);
  }
  
  if (userCart.length !== 0 && item.length === 0) {
    const cart = await Cart.findOneAndUpdate(
      {
        userId: req.body.userId,
      },
      {
        $push: {
          cart: req.body.cart,
        },
      },
      { new: true }
    ).catch((error) => {
      return res.status(404).json({ error: error.message });
    });
    return res.status(200).json(cart);
  }
  
  if (userCart.length !== 0 && item.length !== 0) {
    console.log("here");
    const cart = await Cart.findOneAndUpdate(
      {
        userId: req.body.userId,
        "cart.productId": req.body.cart.productId,
      },
      { $inc: { "cart.$.count": 1 } },
      { new: true }
    ).catch((error) => {
      return res.status(404).json({ error: error.message });
    });
    res.status(200).json(cart);
  }
};

const removeCart = async (req, res) => {

  const cart = await Cart.findOneAndUpdate(
    {
      userId: req.body.userId,
      "cart.productId": req.body?.productId,
    },
    { $inc: { "cart.$.count": -1 } },
    { new: true }
  ).catch((error) => {
    return res.status(404).json({ error: error.message });
  });
  res.status(200).json(cart);
};

const getCart = async (req, res) => {};


module.exports = {
  addCart,
  getCart,
  removeCart,
};
