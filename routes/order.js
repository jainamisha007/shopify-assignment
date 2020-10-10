const express = require("express")
const router = express.Router()
const { getOrders } = require("../controllers/order")

// get all orders
router.get(
  "/",
  getOrders
)

module.exports = router