const axios = require("axios")

const apikey = process.env.SHOPIFY_API_KEY
const password = process.env.SHOPIFY_PASSWORD

exports.getProducts = (req, res) => {
  axios({
    method: 'GET',
    url: `https://${apikey}:${password}@samplestoreamisha.myshopify.com/admin/api/2020-10/products.json`
  }).then((response) => {
    console.log(response.data.products[0].variants);
    console.log(response.data.products[0].options);
    return res.render('products', {
      data: response.data.products
    })
  })
  .catch((err) => console.log(err))
}