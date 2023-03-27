const {createServer} = require('http')

const server = createServer((req, res) => {
    req.on('data', (chunk) => {
        const upperCase = chunk.toString().toUpperCase()
        const canContinue = res.write(upperCase)

        if(!canContinue) {
            srcStream.pause()
            destStream.once('drain', () => srcStream.resume())
        }
    })
    req.on('end', () => res.end())
})



server.listen(8000)