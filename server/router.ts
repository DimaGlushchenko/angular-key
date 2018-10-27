import * as express from 'express';
const app = express.Router();

export { app as routes};

app.get('/', (req, res) => res.send('Hi'));
app.get('/users', (req, res) => res.send([]));  