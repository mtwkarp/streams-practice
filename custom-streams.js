import {Readable} from 'readable-stream'
import emoji from 'emoji'

const emojis = Object.keys(emoji.EMOJI_MAP)

function getEmojiDescription(index) {
    return emoji.EMOJI_MAP[emojis[index]][1]
}

function getMessage(index) {
    return emojis[index] + ' ' + getEmojiDescription(index) + '\n'
}
class EmojiStream extends Readable {
    constructor(options) {
        super(options);
        this._index = 0
    }
    _read() {
        if(this._index >= emojis.length) {
            return this.push(null)
        }

        return this.push(getMessage(this._index++))
    }
}

// const endlessN = new Readable({
//     read () {
//         this.push(Math.random() + '\n')
//     }
// })
//
// endlessN.pipe(process.stdout)


// const emojiStream = new EmojiStream()
//
// emojiStream.pipe(process.stdout)

// class DateStream extends Readable {
//     constructor(props) {
//         props.objectMode = true
//         super(props);
//     }
//     _read() {
//         this.push(new Date())
//     }
// }
//
// const dateStream = new DateStream({})

