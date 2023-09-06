const express = require("express");
const inventoryController = require("../controller/inventoryController");
const router = express.Router();

router.get("/", inventoryController.getInventory);
router.get("/:id", inventoryController.getInventoryById);
router.post("/", inventoryController.createInventory);
router.put("/:id", inventoryController.updateInventory);
router.delete("/:id", inventoryController.deleteInventory);
module.exports = router;
