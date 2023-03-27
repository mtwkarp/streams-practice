import {Transform} from 'readable-stream'

export default class UpperCasify extends Transform {
    _transform(chunk, encoding, done) {
        this.push(chunk.toString().toUpperCase())
        done()
    }
}