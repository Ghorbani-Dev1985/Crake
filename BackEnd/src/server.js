const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const crakeDB = require('./DB/crakeDB')

crakeDB.connect((error) => {
    if(error) {
        console.log('Connection Unsuccessfully...')
    }else{
        console.log('Connection Successfully...')
        let newUserInsertQuery = "INSERT INTO `users` VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]')"
    }
})