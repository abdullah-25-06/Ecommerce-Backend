const { Router } = require("express");
const { product, sp, store } = require("../controller/store");
const store_router = Router();

store_router.route("/store").post(store);
store_router.route("/sp/:id").post(sp);
store_router.route("/product").post(product);
module.exports = store_router;
