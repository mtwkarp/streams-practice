// const fs = require('fs')
//
// const r = fs.createReadStream(process.argv[2])
// r.pipe(process.stdout)

const Readable = require('stream').Readable

const r = new Readable()

r.push('hell')
r.push('no')
r.push(null)

r.pipe(process.stdout)