/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

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
    await queryInterface.bulkInsert("Cities", [
      {
        cityName: "New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Los Angeles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Chicago",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Houston",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Phoenix",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        email: "123@123",
        password: await bcrypt.hash("123", 10),
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Cards", [
      {
        title: "Card 1",
        price: 100,
        image: "1718833964097.webp", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Card 2",
        price: 200,
        image: "1718833964097.webp", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Card 3",
        price: 300,
        image: "1718862027509.webp", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Add more cards as needed
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
