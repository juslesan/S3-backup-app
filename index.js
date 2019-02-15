//configuring the AWS environment
require('dotenv').load();
var userHome = require('user-home');
const path = require('path');

const S3 = require('aws-sdk/clients/s3')

const client = new S3({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    sessionToken: process.env.AWS_SESSION_TOKEN
  });

let fs = require('fs')
// let filePath = process.env.DIR_PATH;
let distFolderPath = process.env.DIR_PATH
// console.log(path.dirname('~/home/santeri/aws/backup'));
const upload = () => { 
    
    fs.readdir(distFolderPath, (err, files) => {

    if(!files || files.length === 0) {
      console.log(`provided folder '${filePath}' is empty or does not exist.`);
      console.log('Make sure your project was compiled!');
      return;
    }
  
    // for each file in the directory
    for (const fileName of files) {
  
      // get the full path of the file
      const filePath = path.join(distFolderPath, fileName);
      
      // ignore if directory
      if (fs.lstatSync(filePath).isDirectory()) {
        continue;
      }
  
      // read file contents
      fs.readFile(filePath, (error, fileContent) => {
        // if unable to read file contents, throw exception
        if (error) { throw error; }
  
        // upload file to S3
        client.upload({
          Bucket: process.env.BUCKET_NAME,
          Key: 'backup/' + fileName,
          Body: fileContent
          
        }, (res) => {
          console.log(`Successfully uploaded '${fileName}'!`);
        });
  
      });
    }
  });
}

upload()
if (process.env.REFRESH_TIME !== undefined) {
    setInterval(upload, process.env.REFRESH_TIME);
}
