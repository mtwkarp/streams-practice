const {createReadStream} = require('fs');

if(!process.argv[2]) {
    console.error("No arguments provided")
    return
}

const file = createReadStream(process.argv[2], {encoding: 'utf-8'})

let counter = 0

file.on('data', (chunk) => {
    const splitedString = chunk.split(/\s+/)
    // const words = []
    //
    // splitedString.forEach(str => {
    //     if(str !== '//' && str !== '') words.push(str)
    // })
    //
    // counter = words.length
    counter = splitedString.length
})

file.on('end', () => {
    console.log(`Found ${counter} words`)
})

file.on('error', err => console.error(`Error reading file: ${err}`))