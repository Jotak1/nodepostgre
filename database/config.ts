import { Sequelize } from 'sequelize';

//conexion sequelize a postgres con usuario y contraseña
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/stopwatch');

export const dbConnection = () => {

    sequelize.authenticate()
    .then(() => console.log('DB connection successful'))
    .catch(err => console.log('DB connection error: ' + err));

}

export default sequelize;

