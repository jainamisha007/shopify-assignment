const axios = require("axios")

const apikey = process.env.SHOPIFY_API_KEY
const password = process.env.SHOPIFY_PASSWORD

exports.getOrders = (req, res) => {
  axios({
    method: 'GET',
    url: `https://${apikey}:${password}@samplestoreamisha.myshopify.com/admin/api/2020-10/orders.json`
  }).then((response) => {
    console.log(response.data.orders);
    return res.render('orders', {
      title: "Orders",
      data: response.data.orders
    })
  })
  .catch((err) => console.log(err))
}