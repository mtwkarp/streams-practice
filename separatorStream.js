import {Transform} from "readable-stream";

export default class SeparatorStream extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, enc, next) {
        this.push(chunk.toString() + '\n')

        next()
    }
}