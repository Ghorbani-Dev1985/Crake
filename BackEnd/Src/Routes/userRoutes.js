const express = require("express");
const crakeDB = require("../DB/crakeDB");
const userRoutes = express.Router();

userRoutes.post("/newUser", (req, res) => {
  const body = req.body;
      console.log("Connection Successfully...");
      let date = new Date().toLocaleDateString("fa-IR");
      let newUserInsertQuery = `INSERT INTO users VALUES (Null, '${date}' ,'${body.firstName}','${body.lastName}', '${body.phoneNumber}' ,' ${body.userName}' ,'${body.password}')`;
      crakeDB.query(newUserInsertQuery, (error, result) => {
        if (error) {
          console.log("Insert User Failed..." , error);
          res.send(null);
        } else {
          console.log("One user Inserted...");
          res.send(true);
        }
      });
});

userRoutes.get('/all' , (req, res) => {
      console.log("Connection Successfully...");
      let getAllUsersQuery = 'SELECT * FROM users';
      crakeDB.query(getAllUsersQuery, (error, result) => {
        if (error) {
          console.log("Get All User Failed..." , error);
          res.send(null);
        } else {
          console.log("All users...");
          res.send(JSON.stringify(result));
        }
      });
})

userRoutes.delete('/remove/:userID' , (req , res) => {
  let userID = req.params.userID
      console.log("Connection Successfully...");
      let deleteUserQuery = `DELETE FROM users WHERE id = ${userID}`;
      crakeDB.query(deleteUserQuery, (error, result) => {
        if (error) {
          console.log("DELETE User Failed..." , error);
          res.send(null);
        } else {
          console.log("Deleted user...");
          res.send(JSON.stringify(result));
        }
      });
})

userRoutes.put('/edit/:userID' , (req , res) => {
  let userID = req.params.userID;
  let body = req.body;
  console.log("Connection Successfully...");
  let updateUserQuery = `UPDATE users SET firstName='${body.firstName}', lastName='${body.lastName}', phoneNumber ='${body.phoneNumber}', userName='${body.userName}', password='${body.password}' WHERE id = ${userID}`;
  crakeDB.query(updateUserQuery, (error, result) => {
    if (error) {
      console.log("UPDATE User Failed..." , error);
      res.send(null);
    } else {
      console.log("UPDATED user...");
      res.send(JSON.stringify(result));
    }
  });
})

module.exports = userRoutes;
