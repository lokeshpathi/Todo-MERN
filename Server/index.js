const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const TodoModel = require('./Models/model.js');
app.use(express.json())
app.use(cors())

app.delete('/delete',(req,res)=>{
    TodoModel.deleteMany({done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err.message))
})

app.put('/update/:id',(req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params.id);
    const done = req.body.done
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err.message))
})

app.post('/add',(req,res)=>{
    const task=req.body.task;
    const done=req.body.done;
    TodoModel.create({
        task:task,
        done:done
    }).then(res=>res.json(result)).catch(err=>res.json(err))
})

app.get('/Home',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json)
})
mongoose.connect('mongodb://localhost:27017/testdb')
app.listen(3002,()=>{
    console.log("Server has started")
})