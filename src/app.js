const express = require("express");
const user_router = require("./routes/user_route");
const store_router = require("./routes/store_route");
const order_router = require("./routes/order_route");
const { sequelize } = require("../models");
const app = express();

app.use(express.json());
app.use(user_router);
app.use(store_router);
app.use(order_router);

sequelize.sync({ alter: true }).then(async () => {
  app.listen(process.env.PORT, () => "Server is listening");
});
