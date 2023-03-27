import {Transform} from "readable-stream";

export default class WordsStream extends Transform {
    constructor(options) {
        super(options);
        this.lastWord = ''
    }

    _transform(chunk, enc, next) {
        const newData = this.lastWord  + chunk.toString()
        const words = newData.split(/\W+/)

        this.lastWord = words.pop()

        for (const word of words) {
            this.push(word)
        }

        next()
    }

    _flush(done) {
        if(this.lastWord) {
            this.push(this.lastWord)
        }

        done()
    }
}