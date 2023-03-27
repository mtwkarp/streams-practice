const fs = require('fs')
const {Writable, Readable} = require('stream')


const rs = fs.createReadStream('assets/600mb.bin')
// const ws = fs.createWriteStream()

let size = 0
rs.on('data', (chunk) => {
    size += chunk.length
})
rs.on('end', () => {
    console.log(size / 1024 / 1024)

})