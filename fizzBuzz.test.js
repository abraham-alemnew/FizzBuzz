// fizzbuzz.test.js

const fizzBuzz = require('./fizzBuzz'); // Corrected file path

test('should return "Invalid input" if input is not a positive number', () => {
    expect(fizzBuzz(0)).toBe("Invalid input");
});

test('should return 1 if input is 1', () => {
    expect(fizzBuzz(1)).toBe(1);
});

test('should return "Fizz" if input is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('should return "Buzz" if input is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('should return "FizzBuzz" if input is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
