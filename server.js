const express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const app=express()
const movies=require("./movies")

app.use(bodyParser.json())
app.use(Cors());

app.get('/movies',(req,res)=>{
    res.json(movies)
})
app.listen(4040)