module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task: {
          type: Sequelize.DataTypes.STRING,
      },
      user_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                  tableName: 'users'
              },
              key: 'id'
          },
      },
      do_at: {
          type: Sequelize.DataTypes.DATE,
      }
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};
