'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('City', [
      { cityName: 'Москва' },
      { cityName: 'Санкт-Петербург' },
      { cityName: 'Новосибирск' },
      { cityName: 'Екатеринбург' },
      { cityName: 'Нижний Новгород' },
      { cityName: 'Казань' },
      { cityName: 'Челябинск' },
      { cityName: 'Омск' },
      { cityName: 'Самара' },
      { cityName: 'Ростов-на-Дону' },
      { cityName: 'Уфа' },
      { cityName: 'Красноярск' },
      { cityName: 'Воронеж' },
      { cityName: 'Пермь' },
      { cityName: 'Волгоград' },
      { cityName: 'Краснодар' },
      { cityName: 'Саратов' },
      { cityName: 'Тюмень' },
      { cityName: 'Тольятти' },
      { cityName: 'Ижевск' },
      { cityName: 'Барнаул' },
      { cityName: 'Иркутск' },
      { cityName: 'Ульяновск' },
      { cityName: 'Хабаровск' },
      { cityName: 'Ярославль' },
      { cityName: 'Владивосток' },
      { cityName: 'Махачкала' },
      { cityName: 'Томск' },
      { cityName: 'Оренбург' },
      { cityName: 'Кемерово' },
      { cityName: 'Новокузнецк' },
      { cityName: 'Рязань' },
      { cityName: 'Астрахань' },
      { cityName: 'Пенза' },
      { cityName: 'Липецк' },
      { cityName: 'Тула' },
      { cityName: 'Киров' },
      { cityName: 'Чебоксары' },
      { cityName: 'Калининград' },
      { cityName: 'Брянск' },
      { cityName: 'Магнитогорск' },
      { cityName: 'Тверь' },
      { cityName: 'Иваново' },
      { cityName: 'Сочи' },
      { cityName: 'Белгород' },
      { cityName: 'Нижний Тагил' },
      { cityName: 'Архангельск' },
      { cityName: 'Курск' },
      { cityName: 'Смоленск' },
      { cityName: 'Калуга' }
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
