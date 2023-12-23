const { Merchant, Store, Products, StoreProducts } = require("../../models");

const store = async (req, res) => {
  try {
    const merchant = await Merchant.findOne({
      where: { UserId: req.params.id },
    });
    const store = await Store.create({ ...req.body, MerchantId: merchant.id });
    res.json({ store });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const sp = async (req, res) => {
  try {
    const merchant = await Merchant.findOne({
      where: { UserId: req.params.id },
    });
    const store = await Store.findOne({ MerchantId: merchant.id });

    const exists = await StoreProducts.findOne({
      where: {
        ProductId: req.body.ProductId,
        StoreId: store.id,
      },
    });
    if (exists) {
      return res.json({ product: exists, msg: "Product already Present" });
    }
    const product = await StoreProducts.create({
      ...req.body,
      StoreId: store.id,
    });
    return res.json({ product });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
const product = async (req, res) => {
  try {
    const product = await Products.findOrCreate({
      where: { Name: req.body.Name },
      defaults: {
        ...req.body,
      },
    });
    return res.json({ product });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

module.exports = { product, sp, store };
