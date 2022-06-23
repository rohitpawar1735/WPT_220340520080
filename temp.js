
const express = require('express');
const { send, get}=require("express/lib/response");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');



app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'nashik',
	port:3306
});

app.get("/update",(req,res)=>{
	let x=req.query.no;
	let y=req.query.name;
	let z=req.query.price;

	console.log(x + " " + y + " " +z);

	connection.query(
		"update book set item_name=? where item_no=?",
	[y,x],
	(err,data)=>{
		if(err){
			console.log(err);
		}
		else{
			if(data.affectedRows>0){
				console.log("Update Successfull");
			}
		}
	});
});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});