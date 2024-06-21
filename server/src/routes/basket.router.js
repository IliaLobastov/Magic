const basketRouter = require("express").Router();
const { Basket, Card, User } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyTokens");

basketRouter.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { cardId } = req.body;
    const basket = await Basket.create({ cardId, userId: res.locals.user.id });
    res.status(200).json(basket);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

basketRouter.get("/", verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  try {
    const basket = await Card.findAll({
      include: {
        model: User,
        where: { id: userId },
        as: "UserCard",
      },
    });
    res.json(basket);
  } catch (error) {
    console.log(error);
    res.status(500).send("Гет запрос для корзины не сработал");
  }
});

basketRouter.route('/:id').delete(verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) {
    return res.status(400).json({ message: 'id must be a number' });
  }
  try {
    // const card = await Card.findByPk(req.params.id);
    await Card.destroy({where: {id}});
    res.json({ message: 'Карточка удалена' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});


// basketRouter.get('/', verifyAccessToken, async (req, res) => {
//   const userId = res.locals.user.id;
//   try {
//     const basket = await User.findByPk(userId, {
//       include: {
//         model: Card,
//         as: 'cards', // Используем алиас, определённый в модели User
//       },
//     });
//     res.json(basket.cards); // Возвращаем только карточки пользователя
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Ошибка при получении корзины пользователя');
//   }
// });


module.exports = basketRouter;
