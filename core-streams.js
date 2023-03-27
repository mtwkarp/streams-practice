const Transform = require('stream').Transform

const toUpper = new Transform({
    transform: function (buf, enc, next) {
        next(null, buf.toString().toUpperCase())
    }
})

process.stdin
    .pipe(toUpper)
    .pipe(process.stdout)

