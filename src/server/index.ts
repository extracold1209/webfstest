import express from 'express';
import route from './routes';
import path from 'path';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/', route);
app.listen(4000, () => console.log('server started'));
