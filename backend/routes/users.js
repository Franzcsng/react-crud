const express = require('express')
const router = express.Router()
const db = require('../config/db_con.js')

// CREATE TABLE accounts (
// 	account_id INT NOT NULL AUTO_INCREMENT,
//     account_name VARCHAR(255) NOT NULL,
//     account_password VARCHAR(255) NOT NULL,
//     date_created DATETIME,
//     PRIMARY KEY (account_id)
// ) AUTO_INCREMENT = 10000;

router.post('/', (req, res) => {
    const sql = 'INSERT INTO `accounts` (`account_name`,`account_password`,`date_created`)VALUES (?, ?, ?)'
    const values = [
        req.body.account_name,
        req.body.account_password,
        req.body.account_name
    ]

    db.execute(sql, values, (err, result) => {
        if(err){
            console.log(err)
        }else{
           return res.json()
        }
    })
})
