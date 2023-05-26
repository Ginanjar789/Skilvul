module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: Sequelize.DataTypes.STRING,
      },
      email: {
          type: Sequelize.DataTypes.STRING,
      },
      password: {
          type: Sequelize.DataTypes.STRING(250),
      }
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
