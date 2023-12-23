const { Users, Merchant, Customers, Cart } = require("../../models");

const user = async (req, res) => {
  try {
    console.log(req.body);
    const user = await Users.create({ ...req.body });
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const merchant = async (req, res) => {
  try {
    console.log(req.body);
    const user = await Merchant.create({ ...req.body, UserId: req.params.id });
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
const customer = async (req, res) => {
  try {
    console.log(req.body);
    const user = await Customers.create({ ...req.body, UserId: req.params.id });
    const cart = await Cart.create({ CustomerId: user.id });
    console.log(cart);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
module.exports = { user, merchant, customer };
