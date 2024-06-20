/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: '123@123',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Cards', [
      {
        title: 'Item 1',
        description: 'Description of item 1',
        price: 1000,
        city: 'New York',
        userId: 1, // Assuming this corresponds to an existing user id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Item 2',
        description: 'Description of item 2',
        price: 1500,
        city: 'Los Angeles',
        userId: 1, // Assuming this corresponds to an existing user id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
    
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
  
  

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
