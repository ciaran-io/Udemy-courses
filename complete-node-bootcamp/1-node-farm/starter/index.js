const fs = require('fs')
const http = require('http')
const url = require('url')
const slugify = require('slugify')
const replaceTemplate = require('./modules/replaceTemplate')

//////////////////////////////
//  read / write to files

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

const templateCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`)
const dataObj = JSON.parse(data);

const urlSlugs = dataObj.map(el => slugify(el.productName, { lower: true }))
// Overivew page
const server = http.createServer((req, res) => {

  const { query, pathname } = url.parse(req.url, true)

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHTML = dataObj.map(el =>
      replaceTemplate(templateCard, el)).join('')

    const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)
    res.end(output)

    // Porduct page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id]
    const output = replaceTemplate(templateProduct, product)
    res.end(output)

    // API
  } else if (pathname === '/api') {
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
