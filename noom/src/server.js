import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (_req, res) => res.render('home'));

app.listen(PORT, () => {
  console.log('Listening on http://localhost:3000');
});
7;
