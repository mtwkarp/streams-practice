// // const fs = require('fs')
// // const through = require('through2')
// //
// // process.stdin
// //     .pipe(through(toUpper))
// //     .pipe(process.stdout)
// //
// // function toUpper(buf, enc, next) {
// //     next(null, buf.toString().toUpperCase())
// // }
//
// var Readable = require('stream').Readable;
// var rs = Readable();
//
// var c = 97;
// rs._read = function () {
//     if (c > 'z'.charCodeAt(0)) rs.push(null);
//
//     setTimeout(() => {
//         rs.push(String.fromCharCode(c++));
//     }, 500)
// };
//
// rs.pipe(process.stdout);
//
// process.on('exit', function() {
//     console.error('\n_read() called ' + (c-97) + 'times')
// })
//
// process.stdout.on('error', process.exit)
//
// process.stdin.on('readable', function () {
//     var buf = process.stdin.read();
//     console.dir(buf);
// });

// var Writable = require('stream').Writable
// var ws = Writable({decodeStrings: false})
//
// ws._write = function (chunk, enc, next) {
//     console.dir(chunk)
//     next()
// }
//
// process.stdin.pipe(ws)

// var fs = require('fs')
// var ws = fs.createWriteStream('message.txt')
//
// ws.write('hello ')
//
// setTimeout(() => {
//     ws.end('boop \n')
// }, 1000)

// var Stream = require('stream')
// var stream = new Stream()
// stream.readable = true
//
// var c = 64
//
// var iv = setInterval(() => {
//     if(++c >= 75) {
//         clearInterval(iv)
//         stream.emit('end')
//     }
//
//     stream.emit('data', String.fromCharCode(c))
// }, 200)
//
// stream.pipe(process.stdout)

// process.stdin.on('data', (d) => {
//     console.log(d)
// })

// var through = require('through')
//
// process.stdin.pipe(through(write, end))
//
// function write(buf) {
//     console.log(buf)
// }
//
// function end() {
//     console.log('end_')
// }

var concat = require('concat-stream')

process.stdin.pipe(concat(function(body) {
    console.log(JSON.parse(body))
}))