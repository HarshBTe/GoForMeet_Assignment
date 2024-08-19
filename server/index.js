const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(

    "mongodb+srv://harshdubey:HarshD36%40@cluster0.gy1d4yp.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
    
)

// API to Get Sorted List of Users
app.get("/getUsers", (req, res) => {
  
    UserModel.find({})  .sort({
        Location: 1,
      })
      .then(function(usersprofiles){
        res.json(usersprofiles)
    }).catch(function(err){
        res.json(err)
    })

})

// API to Create New User
app.post("/createUser", async (req, res) => {
   
   const user = req.body;
   const newUser = new UserModel(user);
   await newUser.save();
   res.json(user);

})



app.listen(3002, ()=> {
    console.log("Server is Running")
})