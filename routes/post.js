const router = require("express").Router();
const todoModel = require("../models/todo");

router.get("/test", async (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//CREATE TODO POST
router.post("/create-todo", async (req, res) => {
  const addTodoList = new todoModel(req.body);

  try {
    const savedTodo = await addTodoList.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALLs POST
router.get("/getall", async (req, res) => {
  try {
    const getAllPost = await todoModel.find();
    res.status(200).json(getAllPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET Single POST
router.get("/:id", async (req, res) => {
  try {
    const getSinglePost = await todoModel.findById(req.params.id);
    res.status(200).json(getSinglePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const getPost = await todoModel.findById(req.params.id);

    if (getPost) {
      await todoModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Post has been deleted!");
    } else {
      res.status(401).json("Post not Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  const getPost = await todoModel.findById(req.params.id);

  try {
    const updatePost = await todoModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
