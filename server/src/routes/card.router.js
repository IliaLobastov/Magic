const express = require("express");
const sharp = require("sharp");
const fs = require("fs/promises");
const upload = require("../middlewares/multer.middleware");

const { Card, User } = require("../../db/models");
const { verifyRefreshToken } = require("../middlewares/verifyTokens");

const cardRouter = express.Router();

cardRouter.get("/", async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

cardRouter.post('/', verifyRefreshToken, upload.single("file"), async (req, res) => {
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
      userId: res.locals.user.id,
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

cardRouter.delete("/:id", verifyRefreshToken, async (req, res) => {
  try {
    const card = await Card.findOne({
      where: { id: req.params.id, userId: res.locals.user.id },
    });
    if (!card) {
      return res
        .status(404)
        .json({ message: "Card not found or unauthorized" });
    }
    await fs.unlink(`./public/img/${card.image}`);
    await card.destroy();
    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

cardRouter.patch(
  "/:id",
  verifyRefreshToken,
  upload.single("file"),
  async (req, res) => {
    try {
      const card = await Card.findOne({
        where: { id: req.params.id, userId: res.locals.user.id },
      });
      if (!card) {
        return res
          .status(404)
          .json({ message: "Card not found or unauthorized" });
      }

       let name = card.image;
      if (req.file) {
        name = `${Date.now()}.webp`;
        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
        await fs.writeFile(`./public/img/${name}`, outputBuffer);
        await fs.unlink(`./public/img/${card.image}`);
      }

      card.title = req.body.title !== undefined ? req.body.title : card.title;
      card.price = req.body.price !== undefined ? req.body.price : card.price;
      card.image = name;
      await card.save();

      res.json(card);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = cardRouter;
