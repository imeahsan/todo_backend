var express = require('express');
const Todo = require("../app/models/Todo");
var router = express.Router();

router.get("/",async (req,res)=>{
let todos = await Todo.find();

    res.send(todos)
})

router.post("/",async (req,res)=>{
    console.log(req.body)
    let todo = new Todo({
        Task:req.body.task
    })
    await todo.save()
    res.send({data:[45454,45454,45,4,5,5,5,5,787,5,56]})
})


module.exports = router;
