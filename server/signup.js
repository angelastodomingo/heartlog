const express = require ("express")
const mongoose = require('mongoose')
const cors = require ("cors")
const UsersSchema = require('./models/users')
const UsersModel = require("./models/users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
    const{email, password} = req.body; 
    UsersModel.findOne({email: email})
    .then (user => {
        if (user) {
            if (user.password === password){
                res.json("Successful")
            } else {
                res.json("The password is incorrect.")
            }
        } else {
            res.json("No such records ever existed.")

        }

    })

})




app.post('/register', (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))


})

app.listen(3001, () => {
    console.log("it works bro")
})