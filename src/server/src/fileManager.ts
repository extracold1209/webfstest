import path from 'path';
import {createReadStream} from 'fs';

class FileManager {
    private rootDirectoryPath: string = process.cwd();

    public initialize(rootDir: string) {
        this.rootDirectoryPath = rootDir;
    }

    public getRawFileStream(filePaths: string | string[]) {
        let fullFilePath = '';
        if (Array.isArray(filePaths)) {
            fullFilePath = path.join(this.rootDirectoryPath, ...filePaths);
        } else {
            fullFilePath = path.join(this.rootDirectoryPath, filePaths);
        }
        return createReadStream(fullFilePath);
    }
}

export default new FileManager();
