const {createReadStream, createWriteStream} = require('fs')

const [,, src, dest] = process.argv

const srcStream = createReadStream(src)
const destStream = createWriteStream(dest)

srcStream.on('data', (chunk) => {
    const canContinue = destStream.write(chunk)

    if(!canContinue) {
        srcStream.pause()
        destStream.once('drain', () => srcStream.resume())
    }
})