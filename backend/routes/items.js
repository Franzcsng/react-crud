const express = require("express");
const router = express.Router();
const db = require('../config/db_con.js')

router.get('/', (req, res) => {
    
    const sql = 'SELECT * FROM `items`';
   
         db.query(sql, (err, rows) => {
            if(err) {
                console.log(err)
            }
        return res.json(rows)
        });
})


router.post('/', (req, res) => {
    
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

router.delete('/:id', (req, res) => {

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


router.put('/:id', (req, res) => {

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


router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM `items` WHERE `id` = ?'
    const id = req.params.id

    db.execute(sql, [id], (err, result) => {
        if(err){
            console.log('Error fetching item: ' + err)
        }
        return res.json(result)

    })
})

module.exports =  router