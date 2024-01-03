const express = require('express')
const crakeDB = require('../DB/crakeDB')
const userRoutes = express.Router()



userRoutes.post('/' , (req , res) => {
    const body = body;
    crakeDB.connect((error) => {
        if(error) {
            console.log('Connection Unsuccessfully...')
        }else{
            console.log('Connection Successfully...')
            let date = new Date().toLocaleDateString('fa-IR');
            let newUserInsertQuery =
             `INSERT INTO users VALUES (Null, ${date} ,${body.firstName},${body.lastName}, ${body.userName} ,${body.password})`
            crakeDB.query(newUserInsertQuery , (error , result) => {
                if(error){
                    console.log('Insert User Failed...')
                    res.send(null)
                }else{
                    console.log('One user Inserted...')
                    req.send(true)
                }
            })
        }
    })
})

module.express = userRoutes;
