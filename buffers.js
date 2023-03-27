// const bufferFromString = Buffer.from('hi')
// const bufferFromByteArray = Buffer.from([65, 34, 234])
// const bufferFromHex = Buffer.from('4369616f2068756d616e', 'hex')
// const bufferFromBase64 = Buffer.from('Q2lhbyBodW1hbg==', 'base64')
//
// console.log(bufferFromString)
// console.log(bufferFromByteArray)
// console.log(bufferFromHex)
// console.log(bufferFromBase64)
//
// console.log(bufferFromString.toString('utf-8'))
// console.log(bufferFromString.toString('hex'))
// console.log(bufferFromString.toString('base64'))
//
// console.log(bufferFromString.length)

// const {readFile, writeFile} = require('fs/promises')

// async function copyFile(src, dest) {
//     const content = await readFile(src)
//
//     return writeFile(dest, content)
// }
//
// const [,, src, dest] = process.argv
//
// copyFile(src, dest)
// .then(() => {
//     console.log(`${src} copied into ${dest}`)
// })
// .catch((err) => {
//     console.log(err);
//     process.exit(1);
// })

const {createReadStream, createWriteStream} = require('fs')

const [,, src, dest] = process.argv

const srcStream = createReadStream(src)

const destStream = createWriteStream(dest)

srcStream.pipe(destStream)
console.log(process.memoryUsage().arrayBuffers)