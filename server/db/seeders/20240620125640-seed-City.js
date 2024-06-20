'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { cityName: 'Москва', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Санкт-Петербург', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Новосибирск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Екатеринбург', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Нижний Новгород', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Казань', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Челябинск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Омск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Самара', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Ростов-на-Дону', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Уфа', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Красноярск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Воронеж', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Пермь', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Волгоград', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Краснодар', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Саратов', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Тюмень', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Тольятти', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Ижевск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Барнаул', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Иркутск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Ульяновск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Хабаровск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Ярославль', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Владивосток', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Махачкала', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Томск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Оренбург', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Кемерово', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Новокузнецк', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Рязань', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Астрахань', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Пенза', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Липецк', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Тула', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Киров', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Чебоксары', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Калининград', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Брянск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Магнитогорск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Тверь', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Иваново', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Сочи', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Белгород', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Нижний Тагил', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Архангельск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Курск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Смоленск', createdAt: new Date(), updatedAt: new Date() },
      { cityName: 'Калуга', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     
      Example:
      await queryInterface.bulkDelete('People', null, {});
     */
  }
};
