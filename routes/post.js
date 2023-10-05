const router = require('express').Router()
const todoModel = require('../models/todo')


router.get("/test", async (req,res) => {
    res.json({ message: 'Hello from the server!' });
})




router.post("/create-todo", async (req,res) => {
    const addTodoList = new todoModel(req.body);

    try {
        
        const savedTodo = await addTodoList.save();
        res.status(200).json(savedTodo)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router