const router = require("express").Router();

const StudyItem = require("../../models/StudyItem");

// @route GET api/items
// @desc  GET All Items
// @access Public
router.get("/", async (req, res) => {
  try {
    const items = await StudyItem.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/items
// @desc  POST an Item
// @access Public
router.post("/", async (req, res) => {
  try {
    const item = await new StudyItem(req.body).save();

    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/items/:id
// @desc  Delete an item
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    const item = await StudyItem.findById(req.params.id);
    await item.remove();
    res.json({ msg: "Item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
