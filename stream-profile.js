const {
    createReadStream,
    createWriteStream
} = require('fs')

const start = performance.now()

const profile = setInterval(() => {
    console.error(`${(process.memoryUsage().arrayBuffers / 1024 / 1024).toFixed(4).padStart(10)} Mb`)
}, 100)

const [,, src, dest] = process.argv

// create source stream
const srcStream = createReadStream(src)

// create destination stream
const destStream = createWriteStream(dest)

const s = srcStream.pipe(destStream)
s.on('finish', () => {
    const end = performance.now()
    console.log(`${src} copied into ${dest}\nTime Taken: ${(end - start) / 1000} secs`)
    clearInterval(profile)
})
