import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('postgres://stopwatch:stopwatch@localhost:5432/stopwatch');


const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  laps: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 15],
    },
  },
},{
    timestamps: false,
});

export default User;
