/**
 * @description Calculates the factorial of a given integer `n`. It returns the value
 * of `n` multiplied by the factorial of `n-1`, if `n` is not equal to 0 or 1.
 * 
 * @param { integer } n - value of the factorial calculation.
 * 
 * @returns { integer } the value of the given integer `n`.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
/**
 * @description Determines whether a given number is prime by checking if it is
 * divisible by any integer between 2 and the square root of the number, inclusive.
 * If no division occurs, the number is deemed prime.
 * 
 * @param { integer } num - number being tested for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is prime
 * or not.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description Multiplies a given value of Celsius by 9/5 and then adds 32 to produce
 * the equivalent Fahrenheit value.
 * 
 * @param { number } celsius - temperature in Celsius that is to be converted to Fahrenheit.
 * 
 * @returns { integer } the temperature in Fahrenheit based on the input Celsius value.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description Iterates through an array, compares each element to the current maximum
 * value, and replaces the maximum value with the next element if it is greater. The
 * final maximum value is returned.
 * 
 * @param { array } arr - 1D array of numbers that the function processes to find its
 * maximum value.
 * 
 * @returns { number } the maximum value present in the array.
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * @description Takes a string as input and returns its reversed version by splitting,
 * reversing, and joining back to a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the original string reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description Verifies if a given string is a palindrome by checking if it is equal
 * to its reverse.
 * 
 * @param { string } str - string that is to be tested for palindromicity.
 * 
 * @returns { boolean } a boolean value indicating whether the given string is a palindrome.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description Generates a random number between the given minimum and maximum values
 * using the `Math.random()` method and the `floor()` function to return an integer
 * value within the range.
 * 
 * @param { number } min - minimum possible value that the generated random number
 * can take, which is included in the range of values between `min` and `max`.
 * 
 * @param { number } max - maximum value that the generated random number can take,
 * and it determines the range of possible values that the function can generate.
 * 
 * @returns { number } a random number between `min` and `max`.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Calculates the area of a circle using its radius, returning the result
 * in square units.
 * 
 * @param { number } radius - 2-dimensional distance from the center of the circle
 * to any point on its circumference, which is used to calculate the area of the
 * circle using the formula `A = πr^2`, where `r` is the radius.
 * 
 * @returns { number } the area of a circle, which is equal to $\pi$ times the square
 * of the radius.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description Takes an array as input and returns a count of the number of occurrences
 * of each value in the array, using reduce() method to accumulate the counts.
 * 
 * @param { array } arr - array whose element occurrences are to be counted.
 * 
 * @returns { object } an object containing counts of each element in the input array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description Takes a sentence as input, splits it into individual words, and then
 * capitalizes the first letter of each word before joining them back into a single
 * sentence.
 * 
 * @param { string } sentence - string to be processed, which is split into individual
 * words, and each word's first character is capitalized and combined with the rest
 * of the word using concatenation.
 * 
 * @returns { string } a capitalized version of the input sentence.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
