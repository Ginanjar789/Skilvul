const { Sequelize } = require("sequelize");
const UserFn = require("./User");
const TodoFn = require("./Todo");

const connection = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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
