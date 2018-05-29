import express from 'express';
import models from './model';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome')
});

models.sequelize.sync().then(x => {
  app.listen(3031, () => {
    console.log('server start at 3031')
  });
})

export default app;