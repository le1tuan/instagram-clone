import Sequelize from 'sequelize';
const sequelize = new Sequelize('instagram', 'root', '', {
  dialect: 'mysql',
});
const models = {
  Users: sequelize.import('./users'),
  Articles: sequelize.import('./articles'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;