const { Router } = require("express");
const { cp, order } = require("../controller/order");
const order_router = Router();

order_router.route("/order").post(order);
order_router.route("/cp/:id").post(cp);
module.exports = order_router;
