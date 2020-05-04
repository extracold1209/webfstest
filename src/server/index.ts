import app from './express';
import config from '../../config';
import fileManager from './src/fileManager';

fileManager.initialize(config.rootDirectory);

app.get('/test', (req, res) => {
    fileManager.getRawFileStream('sample.mp4').pipe(res);
})
app.listen(4000, () => console.log('server started'));
