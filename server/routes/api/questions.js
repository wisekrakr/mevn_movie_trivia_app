const router = require("express").Router();

const auth = require("../../middleware/auth");
const Question = require("../../models/Question");

// @route Get api/questions
// @desc  Get all question
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route Get api/questions/:id
// @desc  Get a question
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/questions
// @desc  Add a question
// @access Private
router.post("/", auth, async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
