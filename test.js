/**
 * @description Calculates the factorial of a given integer `n`, returning `1` for
 * `n = 0` or `1` and `n-1` times `n` otherwise.
 * 
 * @param { integer } n - integer value for which the factorial is calculated.
 * 
 * @returns { integer } the value of the factorial of the input integer `n`.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description Determines whether a given number is prime by checking for divisors
 * using trial division and returning `true` if no divisor is found, and `false` otherwise.
 * 
 * @param { integer } num - 2-digit positive integer to be checked for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is prime.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description Multiplies the input `celsius` by a fraction (9/5), and then adds 32
 * to the result, returning the resulting temperature in Fahrenheit.
 * 
 * @param { integer } celsius - Celsius temperature value to be converted to Fahrenheit.
 * 
 * @returns { integer } the temperature in Fahrenheit, calculated as (celsius × 9 /
 * 5) + 32.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description Iterates through an array and returns the largest element found.
 * 
 * @param { array } arr - 1D array whose maximum value is to be found by the function.
 * 
 * @returns { number } the maximum value in the input array.
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
 * @description Takes a string as input, splits it into individual characters, reverses
 * the order of those characters, and then reconstructs the original string by joining
 * the characters back together.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } a reversed string of the input given.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description Returns whether a given string is a palindrome by checking if it
 * matches its reverse version.
 * 
 * @param { string } str - string to be tested for palindromism.
 * 
 * @returns { boolean } a boolean value indicating whether the given string is a
 * palindrome or not.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description Generates a random number within a specified range, calculated by
 * multiplying the range by a random value between 0 and 1, then adding the minimum
 * value to obtain the result.
 * 
 * @param { integer } min - minimum value that the generated random number can take,
 * and it is used to limit the range of possible values returned by the function.
 * 
 * @param { integer } max - maximum value that the generated random number can take,
 * and it is used to limit the range of possible values returned by the function.
 * 
 * @returns { integer } a random integer between `min` and `max`, inclusive of `min`.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Calculates the area of a circle given its radius, returning the result
 * in square units.
 * 
 * @param { number } radius - distance from the center of the circle to its edge,
 * which is used to calculate the area of the circle.
 * 
 * @returns { number } the area of a circle with radius `radius`, which is equal to
 * `Math.PI * radius ** 2`.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description Reduces an array using the provided callback, returning an object
 * where each key is a value and the count of occurrences of that value in the array.
 * 
 * @param { array } arr - array whose occurrences are to be counted and reduced,
 * serving as the basis for generating the resulting count object.
 * 
 * @returns { object } a count of the occurrences of each value in the input array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description Transforms a sentence into a capitalized version by splitting it into
 * individual words, capitalizing the first letter of each word, and rearranging them
 * with spaces in between.
 * 
 * @param { string } sentence - text to be capitalized
 * 
 * @returns { string } a capitalized version of the input sentence.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
