import {
    createReadStream,
    createWriteStream
} from 'fs'
import {pipeline} from 'stream'
import {createHash} from 'crypto'

const [, , src, dest] = process.argv
const srcStream = createReadStream(src)
const hashStream = createHash('sha256')
const destStream = createWriteStream(dest + '.sha')

pipeline(srcStream, hashStream, destStream, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log('Processing completed successfully')
    }
})