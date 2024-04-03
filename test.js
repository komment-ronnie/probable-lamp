/**
 * @description computes the factorial of a given integer value `n`. It uses recursion
 * to compute the factorial of smaller values before returning the final result for
 * the given input.
 * 
 * @param { integer } n - 0-based index of the 0th term in the recursive calculation
 * of the factorial of a non-negative integer.
 * 
 * @returns { integer } the value of the factorial of a given integer `n`.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description determines whether a given number is prime by iteratively checking
 * if it is divisible by any integer from 2 to the square root of the number. If no
 * division occurs, the number is prime.
 * 
 * @param { number } num - for which the primality is being tested.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is prime
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
 * @description takes a temperature in Celsius as input and returns its equivalent
 * value in Fahrenheit.
 * 
 * @param { integer } celsius - temperature in Celsius that is to be converted to
 * Fahrenheit using the provided formula.
 * 
 * @returns { integer } a temperature value in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description searches through an array and returns the maximum value found.
 * 
 * @param { array } arr - 1D array of values that the function will find the maximum
 * element from.
 * 
 * @returns { integer } the maximum value present in the given array.
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
 * @description reverses a given string by splitting it into individual characters,
 * reversing their order, and joining them back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { string } the string reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description checks if a given string is a palindrome by comparing it to its
 * reversed form using the `reverseString` function.
 * 
 * @param { string } str - string to be checked for palindromism.
 * 
 * @returns { boolean } a boolean value indicating whether the input string is a
 * palindrome or not.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description generates a random number between the specified minimum and maximum
 * values using the `Math.floor()` method to round the result to an integer.
 * 
 * @param { integer } min - minimum value that the generated number can take, and it
 * sets the lower bound of the range of possible values returned by the function.
 * 
 * @param { integer } max - maximum value that the generated random number can take,
 * which is used to calculate the range of possible values returned by the function.
 * 
 * @returns { integer } a random number between `min` and `max`.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description calculates the area of a circle with provided radius using the formula:
 * \begin{code}
 * A = πr^2
 * \end{code}.
 * 
 * @param { number } radius - 2-dimensional distance from the center of the circle
 * to any point on its circumference, which is used to calculate the area of the circle.
 * 
 * @returns { number } the area of a circle, calculated as `Math.PI * radius ** 2`.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description takes an array as input and returns a new object with the occurrence
 * count of each element in the array.
 * 
 * @param { array } arr - array whose occurrences are to be counted and passed as an
 * argument to the `reduce()` method for aggregation.
 * 
 * @returns { object } a count of each element in the input array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description takes a sentence as input, splits it into individual words, capitalizes
 * the first letter of each word, and then joins them back together with a space
 * separator to form the original sentence with all words capitalized.
 * 
 * @param { string } sentence - string to be processed, which is split into individual
 * words, and each word's first letter is capitalized before being joined back into
 * a single string.
 * 
 * @returns { string } a capitalized string created by joining the words of a given
 * sentence with their initial letters capitalized and the remaining letters lowercase.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
