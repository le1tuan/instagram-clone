export default (sequelize, DataTypes) => {
  const Articles = sequelize.define('users', {
    content: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      unique: true,
    },
    numOfLike: {
      type: DataTypes.INTEGER,
    }
  })

  Articles.associate = (models) => {
    console.log(models);
    Articles.belongsToMany(models.Users, {
      through: 'ArticlesUsers'
    })
  };
  return Articles
}