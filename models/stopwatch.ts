import {  DataTypes } from "sequelize";
import sequelize from "../database/config";



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
