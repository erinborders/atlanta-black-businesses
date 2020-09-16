require('dotenv').config()

var http = require('http')
var url = require('url')
var fs = require('fs')


http.createServer(function (req, res) {
    var q = url.parse(req.url)
    var filename = '.' + q.pathname

    console.log(filename)

    if (filename == './') {
        filename = './index.html'
    }

    fs.readFile(filename, function(err, data) {
        if (err) {
            console.error(err)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end();
        }
    })
}).listen(8080)