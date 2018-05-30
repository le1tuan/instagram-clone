import express from 'express';
import bodyParser from 'body-parser';
import models from './model';


const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome')
});

app.get('/sign-up', (req, res) => {

})

models.sequelize.sync().then(x => {
  app.listen(3031, () => {
    console.log('server start at 3031')
  });
})

export default app;