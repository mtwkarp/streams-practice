const {request} = require('http')

const req = request({
    hostname: 'webhook.site',
    method: 'POST',
    path: '/9b2aebb0-48ea-4fec-897e-ef4c4f6cba12'
},
    (resp) => {
        console.log(`Server responded with ${resp.statusCode}`)
    }
    )

req.on('finish', () => console.log('request sent'))
req.on('close', () => console.log('Connection close'))
req.on('error', () => console.error(`Request failed: ${err}`))

req.write('writing some content... \n')
req.end('last write & close the stream')