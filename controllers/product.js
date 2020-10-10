const axios = require("axios")

const apikey = "2a0cf61ad8c5d786469dac35acd5d676"
const password = "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"

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