const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password, {
        host: config.development.host,
        dialect: config.development.driver
});

const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    contact: Sequelize.STRING
});

const Product = sequelize.define('Product', {
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
});

const Student = sequelize.define('Students', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    contact: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
});

module.exports = {
    sequelize,
    User,
    Product,
    Student
};
