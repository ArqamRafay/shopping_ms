const express = require('express');
const cros = require("cors")
const proxy = require("express-http-proxy")

const app = express();
app.use(express.json())
app.use(cros())

app.use('/customer', proxy('http://localhost:8001'))
app.use('/shopping', proxy('http://localhost:8003'))
app.use('/products', proxy('http://localhost:8002'))

app.listen(8000, () => {
    console.log('Gateway is listening on port 8000')
})