const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require ("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
app.use(express.json())