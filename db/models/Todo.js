const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Todo extends Model {}

    Todo.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        task: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'users'
                },
                key: 'id'
            },
        },
        do_at: {
            type: DataTypes.DATE,
        }
    }, {
        sequelize: connection,
        tableName: 'todos',
        timestamps: false,
    });

    return Todo;
};
