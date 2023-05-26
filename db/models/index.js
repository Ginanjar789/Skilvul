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

module.exports = {
    User,
    Todo,
};
