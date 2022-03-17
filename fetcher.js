const request = require('request');
const fs = require('fs');

const url = process.argv[2];

const localPaths = process.argv[3];

const feature = function (url, localPaths) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("failed to download resources", error);
      return;
    }
    fs.writeFile(localPaths, body, (error) => {
      if (error) {
        console.log("failed to write to localPaths", localPaths)
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPaths}`)
      }
    })
  })
}

if (!url || !localPaths) {
  console.log('URL and localpaths are required');
} else {
  feature(url, localPaths);
}

