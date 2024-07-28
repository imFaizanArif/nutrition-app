const { Sequelize, DataTypes } = require('sequelize');

// Configure Sequelize to use MySQL
const sequelize = new Sequelize('nutrition_app', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql',
});

const Query = sequelize.define('Query', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL has been established successfully.');
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = Query;
