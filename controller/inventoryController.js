const { Inventory } = require("../models");

const inventoryController = {
  getInventory: (req, res) => {
    Inventory.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getInventoryById: (req, res) => {
    const productId = parseInt(req.params.id, 10); // Convert the parameter to an integer
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    Inventory.findOne({
      where: {
        product_Id: productId, // Use the parsed integer value
      },
    })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  createInventory: (req, res) => {
    Inventory.create({
      product_Id: req.body.Id,
      product_name: req.body.product_name,
      product_quantity: req.body.product_quantity,
      product_price: req.body.product_price,
    })
      .then((result) => {
        res.json("succesfully added");
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteInventory: (req, res) => {
    const productId = parseInt(req.params.id, 10); // Convert the parameter to an integer
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    Inventory.destroy({
      where: {
        product_Id: productId, // Use the parsed integer value
      },
    })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  updateInventory: (req, res) => {
    Inventory.update(
      {
        product_name: req.body.product_name,
        product_quantity: req.body.product_quantity,
        product_price: req.body.product_price,
      },
      {
        where: {
          product_Id: req.params.id,
        },
      }
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = inventoryController;
