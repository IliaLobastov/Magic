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
        title: "Clear shot",
        price: 100,
        image: "clear_shot.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Food",
        price: 200,
        image: "food.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Human Cleric",
        price: 300,
        image: "humancleric.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hypothesizzle",
        price: 100,
        image: "hypothesizzle.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Memory Vessel",
        price: 200,
        image: "memoryvessel.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Molten Duplication",
        price: 300,
        image: "moltenduplication.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Murder",
        price: 100,
        image: "murder.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Outlaw Merriment",
        price: 200,
        image: "outlawmerriment.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pest",
        price: 300,
        image: "pest.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Repulse",
        price: 100,
        image: "repulse.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ride down",
        price: 200,
        image: "ridedown.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sandstorm Salvager",
        price: 300,
        image: "sandstormsalvager.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Savage Smash",
        price: 100,
        image: "savagesmash.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Skullcrack",
        price: 200,
        image: "skullcrack.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sword of Wealth and Power",
        price: 300,
        image: "swordofwealthandpower.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Terminal Agony",
        price: 100,
        image: "terminalagony.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Thornado",
        price: 200,
        image: "thornado.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tyrants Scorn",
        price: 300,
        image: "tyrantsscorn.jpg", // Ссылка на изображение
        newcard: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vault Borntyrant",
        price: 200,
        image: "vaultborntyrant.jpg", // Ссылка на изображение
        newcard: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Voidslime",
        price: 300,
        image: "voidslime.jpg", // Ссылка на изображение
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
