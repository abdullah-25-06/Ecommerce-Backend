const {
  Customers,
  StoreProducts,
  CartProducts,
  Cart,
  Order,
  OrderItem,
} = require("../../models");

// app.post("/cp/:id", async (req, res) => {
const cp = async (req, res) => {
  try {
    const sp = await StoreProducts.findOne({ where: { id: req.body.id } });
    const customer = await Customers.findOne({
      where: { UserId: req.params.id },
    });
    const CartId = await Cart.findOne({ where: { CustomerId: customer.id } });
    const item = await CartProducts.create({
      CartId: CartId.id,
      StoreProductId: sp.id,
      quantity: req.body.quantity,
      totalprice: sp.Price * req.body.quantity,
    });
    return res.json({ item });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
// app.post("/order", async (req, res) => {
const order = async (req, res) => {
  try {
    const { id, storeid } = req.query;
    const customer = await Customers.findOne({ where: { UserId: id } });
    const order = await Order.create({
      CustomerId: customer.id,
      StoreId: storeid,
    });
    const cartid = await Cart.findOne({ where: { CustomerId: customer.id } });
    const cartItem = await CartProducts.findAll({
      where: { CartId: cartid.id },
    });
    const orderItems = await Promise.all(
      cartItem.map(
        async (cartProduct) =>
          new OrderItem({
            OrderId: order.id,
            StoreProductId: cartProduct.dataValues.StoreProductId,
            totalprice: cartProduct.dataValues.totalprice,
            quantity: cartProduct.dataValues.quantity,
          })
      )
    );
    const orderItem = await OrderItem.bulkCreate(
      orderItems.map((order) => order.dataValues)
    );
    return res.json({ orderItem });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
module.exports = { cp, order };
