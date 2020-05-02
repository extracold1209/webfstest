import path from 'path';
import {createReadStream} from 'fs';

class FileManager {
    private rootDirectoryPath: string = process.cwd();

    public initialize(rootDir: string) {
        this.rootDirectoryPath = rootDir;
    }

    public getRawFileStream(filePaths: string | string[]) {
        if (Array.isArray(filePaths)) {
            const fullFilePath = path.join(this.rootDirectoryPath, ...filePaths);
            return createReadStream(fullFilePath);
        } else {

        }
    }
}

export default new FileManager();
