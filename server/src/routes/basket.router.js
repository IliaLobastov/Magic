const basketRouter = require('express').Router();
const {Basket} = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

basketRouter
.post("/", verifyAccessToken, async (req, res) =>{
    try {
        const {cardId} = req.body;
        const basket = await Basket.create({cardId, userId: res.locals.user.id});
        res.status(200).json(basket);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

basketRouter.get("/",verifyAccessToken, async (req, res) => {
    try {
        const basket = await Basket.findAll();
        res.json(basket);
    } catch (error) {
        res.status(500).send('Гет запрос для корзины не сработал');
    }
  });


module.exports = basketRouter;