import fs from 'fs'
import path from 'path'

const directoryImagePaths = fs.readdirSync(path.resolve(__dirname));

if (directoryImagePaths instanceof Array) {
  directoryImagePaths
    .filter(imagePath => !/\.js$/.test(imagePath))
    .forEach(imagePath => {
      console.log(imagePath)
    })
}
