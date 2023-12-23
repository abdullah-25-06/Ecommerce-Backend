const { Router } = require("express");
const { customer, merchant, user } = require("../controller/user");
const user_router = Router();

user_router.route("/users").post(user);
user_router.route("/merchant/:id").post(merchant);
user_router.route("/customer/id").post(customer);
module.exports = user_router;
