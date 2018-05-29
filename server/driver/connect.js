import Sequelize from 'sequelize';
const info = Object.freeze({
  user: 'root',
  password: '',
  database: 'instagram'
})
function connector() {
  return new Sequelize(info.database, info.user, info.password, {
    host: 'localhost',
    dialect: 'mysql'
  });
}



export default connector;