const { Sequelize } = require("sequelize");
const UserFn = require("./User");
const TodoFn = require("./Todo");

const connection = new Sequelize({
    database: 'todo_skilvul',
    username: 'root',
    password: 'toor',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const User = UserFn(connection);
const Todo = TodoFn(connection);

Todo.hasOne(User, {
    sourceKey: 'user_id',
    foreignKey: 'id',
    as: 'user'
});
User.hasMany(Todo, {
    sourceKey: 'id',
    foreignKey: 'user_id',
    as: 'todos',
});

module.exports = {
    User,
    Todo,
};
