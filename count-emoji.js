const {createReadStream} = require('fs');
const emoji = require('emoji');

if(!process.argv[2]) {
    console.error("No arguments provided")
    return
}

const file = createReadStream(process.argv[2], {encoding: 'utf-8'})

let counter = 0
// Readable streams are created in paused mode
// Paused streams can be switched to flowing mode with:
// stream.on('data', () => {})
// stream.resume()
// stream.pipe()

// Flowing streams can switch back to paused with:
//     stream.pause()
//     stream.unpipe() on all attached streams

// file.on('data', (chunk) => {
//     for (const char of chunk.toString('utf-8')) {
//         if(emoji.EMOJI_MAP[char]) {
//             counter ++
//         }
//     }
// })

file.on('readable', () => {
    let chunk
    while((chunk = file.read()) !== null) {
        for (const char of chunk.toString('utf-8')) {
        if(emoji.EMOJI_MAP[char]) {
            counter ++
        }
    }
    }
})

file.on('end', () => {
    console.log(`Found ${counter} emoji`)
})

file.on('error', err => console.error(`Error reading file: ${err}`))