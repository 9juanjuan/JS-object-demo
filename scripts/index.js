
console.log('Hello');


function transl33t(originalString) {
    const leetDictionary = {
        A : "4",
        E : "3",
        G : "6",
        I : "1",
        O : "0",
        S : "5",
        T : "7"
        };
    let result = '';
// loop through each letter in originalString
//  if its in the dictionary, and if it is
//  put its value in 'result
//  if its not, just copy the letter into 'result
for(let i = 0; i< originalString.length; i++){
    let theLetter = originalString[i].toUpperCase();
    // console.log(theLetter);
    // console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter]){
        result += leetDictionary[theLetter]
        } else {
         result += theLetter
        }
    
    }
    return result;
}