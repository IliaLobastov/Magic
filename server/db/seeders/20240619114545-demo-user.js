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
