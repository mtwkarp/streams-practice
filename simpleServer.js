const http = require('http')
const parseform = require('body/any')

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url, req.headers)

    parseform(req, res, function (err, params) {
        console.log(params)
        res.end('ok\n')
    })
})

server.listen(5000)