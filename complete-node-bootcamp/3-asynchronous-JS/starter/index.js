const { default: axios } = require('axios');
const fs = require('fs');

// axample of async promise

const readFileProm = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject("File not found");
      }
    })
  })
}

const writeFileProm = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (!err) {
        resolve('The new file has been saved');
      } else {
        reject("Could not write to file");
      }
    })
  })
}

// example of asyncronous code using callbacks
// readFileProm(`${__dirname}/dog.txt`)
//   .then(data => {

//     // Get request for remote image in node.js
//     axios({
//       method: 'get',
//       url: `https://dog.ceo/api/breed/${data}/images/random`,
//       responseType: 'json'
//     })
//       .catch(function (error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log('Error', error.message);
//         }
//         console.log(error.config);

//       })

//       .then(function (response) {
//         fs.writeFile('dog-img.txt', response.data.message, response =>
//           console.log('saved dog image')
//         );
//       })

//   })


// async await from ES8

const getDogPic = async () => {
  try {
    const data = await readFileProm(`${__dirname}/dog.txt`);
    console.log(data);

    const response = await axios.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(response.data.message);

    await writeFileProm('dog-img.txt', response.data.message)
    console.log('saved new dog image');

  }
  catch (err) {
    console.log(err);
    throw (err);
  }

}

// IIFE - Immediately Invoked Function Expression

(async () => {
  try {
    await getDogPic();
  }
  catch (err) {
    console.log(err);
  }
})();


// getDogPic();