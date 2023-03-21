require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var qs = require('qs');
const axios = require("axios");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

app.get('/', (request, response) => {
//   console.log(request.query)
  response.set('Access-Control-Allow-Origin', "*")
  let query = request.query;
  query.appid = apiKey;
  let queryString = qs.stringify(query)
//   console.log(queryString)
  axios(`${apiUrl}?${queryString}`).then(res => {
    response.send(res.data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})