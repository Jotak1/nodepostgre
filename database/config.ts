import { Sequelize } from 'sequelize';

const  sequelize = new Sequelize('postgres://postgres@localhost:5432/postgres');

export const dbConnection = () => {

    sequelize.authenticate()
    .then(() => console.log('DB connection successful'))
    .catch(err => console.log('DB connection error: ' + err));

}

export default sequelize;

