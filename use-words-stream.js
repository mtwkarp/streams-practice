import WordsStream from './wordsStream.js'
import SeparatorStream from "./separatorStream.js";

process.stdin
    .pipe(new WordsStream())
    .pipe(new SeparatorStream())
    .pipe(process.stdout)