/*lec 91
what you leant?: use readir(foldername) to read all the files of it, then you can use foreach of its file by itereting them.
use fs.existSync(folderName) to check if file exist in that folder or not, if doesn't exist then it will skip that file.
use rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
to move the file in newfolder from older one.

You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

for example, these files become:

1. name.jpg
2. name.png
3. this.pdf 
4. harry.zip
5. Rohan.zip
6. cat.jpg 
7. harry.pdf

this: 
jpg/name.jpg, jpg/cat.jpg 
png/name.png 
pdf/this.pdf pdf/harry.pdf
zip/harry.zip zip/Rohan.zip
*/

import path from "path"
import fs from "fs"
const targetDir = '.\\Module 02\\Node\\9 clear the clutter exercise\\target directory'
const parentDir = '.\\Module 02\\Node\\9 clear the clutter exercise';

fs.readdir(targetDir, (err, files) => {
    if (err) throw err;

    files.forEach(fileName => {

        const filePath = path.join(targetDir, fileName)
        const extensionName = path.extname(fileName).slice(1);

        if(!extensionName) return;

        const folderName = path.join(parentDir, extensionName)
        // console.log(extensionName)
        // console.log(filePath)
        // console.log(folderName)

        const oldPath = path.join(targetDir, fileName);
        const newFilePath = path.join(folderName, fileName);

        if (fs.existsSync(folderName)) {
            fs.rename(filePath, newFilePath, (err) => {
                if (err) throw err;
                console.log(`Moved: ${fileName} -> ${newFilePath}`);
            });
        } else {
            console.log(`Skipping ${fileName}: Folder does not exist -> ${folderName}`);
        }
    })
});