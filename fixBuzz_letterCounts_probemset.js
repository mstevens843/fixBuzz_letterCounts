// FizzBuzz Problem 


// pesudoCode
// create function fizzbuzzm where integer is less than 100. If integer is over 100 or negative, print error and stop.
// If integer is divisible by 3, print "Fizz". If divisible by 5, print "Buzz". If divisible by both, print "FizzBuzz". If not divisibile by either, print number.  

function fizzBuzz (n) {
    if (!Number.isInteger(n) || n < 1 || n >= 100)
    {
        console.error("error");
        return;
    }

    for (let i = 1; i <= 1; i++) {
        const divBy3 = i % 3;
        const divBy5 = i % 5;

        if (divBy3 === 0) {
            console.log("Fizz");
        }
        else if (divBy5 === 0) {
            console.log("Buzz");
        }
        else if (divBy3 && divBy5 === 0) { 
            console.log("FizzBuzz")
        }
        else {
            console.log(i);
        }

    }


    

// Lettercount Problem 
// pseudoCode
// function letterCount takes a word and returns a dictionary which counts each letter. If string is not a letter, it prints error and stops. 
// Create a dicitonary to hold letter counts. If letter is in word set count of letter to 1. If word already has the letter increment the count of that letter by 1. 
// return dictionary with letter counts.

function letterOfOccurence (word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    if (typeOf word !== 'string') {
        console.error("error");
        return;
    }
    for (const letter of word) {
        if (!alphabet.includes(letter.toLowerCase()))
        {
            console.error("Error");
            return;
        }
    }

    let letterCount = {};

    for (let letter of word)
    {
        let lowerCaseLetter = letter.toLowerCase();

        if (letterCounts[lowerCaseLetter] !== undefined) {
            letterCounts[lowerCaseLetter]++;
        }
        else {
            letterCounts[lowerCaseLetter] = 1;
        }
    }

    return letterCounts;
}