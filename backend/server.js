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


app.get('/items', (req, res) => {
    
    const sql = 'SELECT * FROM `items`';
   
         db.query(sql, (err, rows) => {
            if(err) {
                console.log(err)
            }
        return res.json(rows)
        });
})


app.post('/items', (req, res) => {
    
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

app.delete('/items/:id', (req, res) => {

    const sql = 'DELETE FROM `items` WHERE `id` =  ? ';
    const id = req.params.id;

    db.execute(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.json({ message: 'Item deleted successfully', result });
    })

})


app.put('/items/:id', (req, res) => {

    const sql = 'UPDATE `items` SET `item_name`= ?, `item_price` = ?, `item_quantity` = ?  WHERE `id` =  ? ';
    const values = [
        req.body.item_name,
        req.body.item_price,
        req.body.item_quantity,
        req.params.id
    ];

    db.execute(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.json({ message: 'Item updated successfully', result });
    })

})


app.get('/item/:id', (req, res) => {
    const sql = 'SELECT * FROM `items` WHERE `id` = ?'
    const id = req.params.id

    db.execute(sql, [id], (err, result) => {
        if(err){

        }

        return res.json(result)

    })
})

