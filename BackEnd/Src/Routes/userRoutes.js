const express = require("express");
const crakeDB = require("../DB/crakeDB");
const userRoutes = express.Router();

userRoutes.post("/", (req, res) => {
  const body = req.body;
  crakeDB.connect((error) => {
    if (error) {
      console.log("Connection Unsuccessfully...");
    } else {
      console.log("Connection Successfully...");
      let date = new Date().toLocaleDateString("fa-IR");
      let newUserInsertQuery = `INSERT INTO users VALUES (Null, '${date}' ,'${body.firstName}','${body.lastName}', '${body.phoneNumber}' ,' ${body.userName}' ,'${body.password}')`;
      console.log(newUserInsertQuery)
      crakeDB.query(newUserInsertQuery, (error, result) => {
        if (error) {
          console.log("Insert User Failed..." , error);
          res.send(null);
        } else {
          console.log("One user Inserted...");
          res.send(true);
        }
      });
    }
  });
});

module.exports = userRoutes;
