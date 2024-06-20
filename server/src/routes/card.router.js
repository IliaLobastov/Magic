const express = require("express");
const sharp = require("sharp");
const fs = require("fs/promises");
const upload = require("../middlewares/multer.middleware");

const { Card, User } = require("../../db/models");

const cardRouter = express.Router();

cardRouter.get("/", async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

cardRouter.post('/', upload.single("file"), async (req, res) => {
  // проверяем наличие файла
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File not found" });
    }
    // создаем имя файла с расширением webp и привязкой к дате
    const name = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    // создаем пост в бд
    const card = await Card.create({
      title: req.body.title,
      price: req.body.price,
      image: name,
      // newcard: req.body.newcard,
      // userId: res.locals.user.id,
    });
    // const plainCard = card.get();
    // plainCard.User = res.locals.user;
    // const plainCard = await Card.findOne({
    //   where: {
    //     id: card.id,
    //   },
    //   include: {
    //     model: User,
    //     attributes: ["id", "name", "email"],
    //   },
    // });
    // отправляем пост
    res.json(card);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = cardRouter;
