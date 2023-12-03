const express = require("express");
const router = express.Router();

const prisma = require('../prisma');

router.get("/", async (req, res) => {
  const foods = await prisma.food.findMany();
  
  res.render('food', { foods });
});

router.get("/:name", async (req, res) => {
  try {
    const food = await prisma.food.findUnique({
      where: { id: req.params.name },
    });

    res.render('food', { food });
  } catch (e) {
    console.error(e);
    res.status(500).send('Error');
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;

    const food = await prisma.food.create({
      data: { name, price },
    });

    res.json(food);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error');
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, price } = req.body;

    const food = await prisma.food.update({
      where: { id: req.params.id },
      data: { name, price },
    });

    res.json(food);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error');
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const food = await prisma.food.delete({
      where: { id: req.params.id },
    });

    res.json(food);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error');
  }
});

module.exports = router;
