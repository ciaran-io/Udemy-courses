const fs = require('fs')
const http = require('http')
const url = require('url')

//////////////////////////////
// Files

//  read the file and print it to the console
// const textIN = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIN);

// const textOUT = `This is what we know about avocado: ${textIN}.\nCreated on ${Date.now()}`;

//  write to file and print to console
// fs.writeFileSync('./txt/output.txt', textOUT);

// console.log('File written successfully');

// non-blocking asyncrhonous read & callback
// do not use callbacks, use async await
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log(`${err}: failed to read data from ${data1}`);

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);

//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', err => {
//         console.log('Your file has successfully written  🥴');
//       })

//     })
//   })
// })

//////////////////////////////
// Server
const replaceTemplate = (template, product) => {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }

  return output
}

const templateCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`)
const dataObj = JSON.parse(data);

// Overivew page
const server = http.createServer((req, res) => {
  const pathName = req.url
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHTML = dataObj.map(el => replaceTemplate(templateCard, el)).join('')
    const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)

    res.end(output)

    // Porduct page
  } else if (pathName === '/product') {
    res.end('This is the product page')

    // API
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.end(data);
  }

  else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end('<h1> Page not found </h1>')
  }
})

const port = 8000

server.listen(port, '127.0.0.1', () => {
  console.log(` Server started: Listening on port ${port}`);
})
