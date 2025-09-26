const express = require("express");
const cors = require("cors");
const path = require ("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
app.use(express.json())

const port = 5000;

const itemsRouter = require('./routes/items.js')

app.use('/items', itemsRouter)



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})




