const http = require('http')

const server = http.createServer((req, res) => {
 switch (req.url) {
  case "/":
   res.end('Welcome to our home page');
   break;
  case "/about":
   res.end('Here is our short history');
   break;
  default:
   res.end(`
  <h1>Nothing out here</h1>
  <p>We can't seem to find the page you ar elooking for</p>
  <a href="/">back home</a>
  `)

 }
 //  if (req.url == '/') {
 //   res.end('Welcome to our home page')
 //  }
 //  if (req.url == '/about') {
 //   res.end('Here is our short history')
 //  } 
 //   res.end(`
 //   <h1>Nothing out here</h1>
 //   <p>We can't seem to find the page you ar elooking for</p>
 //   <a href="/">back home</a>
 //   `)


 // })
})
server.listen(5000)