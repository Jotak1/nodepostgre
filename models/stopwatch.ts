import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

const Stopwatch = sequelize.define('stopwatch', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    laps: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    user: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
    });


export default Stopwatch;




