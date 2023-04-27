const express = require('express');

const app = express();
app.use(express.json())
app.use('/', (req, res, next) => {
    return res.status(200).json({ "mesg": "Hello from product" })
})

app.listen(8002, () => {
    console.log('Product is listening on port 8002')
})