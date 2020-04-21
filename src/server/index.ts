import express from 'express';
import path from 'path';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('start');
})
app.listen(4000, () => console.log('server started'));
