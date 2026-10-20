const http = require('http')
const server =http.createServer((request,response)=>{
     response.write("hello this is imran.sos .and this my first web server project")
     response.end()
})
server.listen (3000)