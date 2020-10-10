require("dotenv").config()

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const ejs = require("ejs")

const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())

app.use("/product", productRoutes)
app.use("/order", orderRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`App is running at ${port} `)
})