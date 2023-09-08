let  book = 'Lorem ipsum dolor sit amet, i,i,i,i,i consectetur adipisicing elit. Mateo, Mateo, Mateo, Deserunt tempore, hic perspiciatis, dignissimos quaerat pariatur ipsam ipsa aut quis temporibus, sequi quibusdam optio atque excepturi vel magni suscipit cum dolorum.'
book = book.toLocaleUpperCase()

const words = {}

let startWord = false;

let mostRepeated = {
    word: '',
    times: 0
}

let word = '';
for( let i = 0; i< book.length; i++  ){
    const ascii = book.codePointAt(i);
 
    // Letra 
    if (( ascii >= 65 && ascii <= 90 ) ||  ( ascii >= 97 && ascii <= 122 )) {
        word = word + book[i];
        if ( startWord == false ){
            startWord = true;
        }
    }
    else
    {
        if ( startWord == true ){
            startWord = false;
            //const word = book.slice( startWord.initIndex, i );
            if (!words[word]){
                words[word] = 1;
            }
            else{
                words[word] = words[word] + 1;
            }
            if (words[word] > mostRepeated.times ){
                mostRepeated.word = word;
                mostRepeated.times = words[word];
            }
            word = '';
          //  console.log( `${word} ${startWord.initIndex}-${startWord.endIndex}`)
        }
    }
}
console.log(words);
console.log(mostRepeated);
/**
 * Let’s say you have a plaintext file containing the contents of a book, 
 * and you want to know what’s the single most frequently used word in it. 
 * Please describe briefly your thought process on how would you solve this; 
 * including what steps would you take, what data structures would you use (if any), 
 * and what would the complexity of your solution be (big O notation).
 */

