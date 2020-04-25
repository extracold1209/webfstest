import express from 'express';
import route from './routes';
import path from 'path';
import config from "./config";

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'public')));

app.use(express.json());
app.use('/', route);

app.listen(config.port, () => console.log(`server started. port ${config.port}`));
