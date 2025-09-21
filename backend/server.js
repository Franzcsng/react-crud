const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require ("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
app.use(express.json())

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_crud",

})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

app.get('/items', async (req, res) => {
    
    const sql = 'SELECT * FROM `items`';
   
         db.query(sql, (err, rows) => {
            if(err) {
                console.log(err)
            }
        console.log(rows)
        return res.json(rows)
        });
})


app.post('/items', async (req, res) => {
    
    const sql = 'INSERT INTO `items` (`item_name`, `item_price`, `item_quantity`) VALUES (?,?,?)';
    const values = [
        req.body.item_name,
        req.body.item_price,
        req.body.item_quantity
    ];
   
         db.execute(sql, values, (err, result) => {
            if(err) {
                console.log(err)
            }
        return res.json()
           
        });
})


