const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const cards = require('../controllers/cards');

const idValidationConfig = {
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
};

router.get('/cards', cards.getCards);

router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(true),
    link: Joi.string().required(true).pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/),
  }),
}), cards.createCard);

router.delete('/cards/:cardId', celebrate(idValidationConfig), cards.deleteCard);

router.put('/cards/:cardId/likes', celebrate(idValidationConfig), cards.putLike);

router.delete('/cards/:cardId/likes', celebrate(idValidationConfig), cards.deleteLike);

module.exports = router;
