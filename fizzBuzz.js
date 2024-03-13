
function fizzBuzz(n) {

     ans = "";

    if (typeof n !== 'number' || n <= 0) {
        return "Invalid input";
    }

    if (n % 3 === 0) {
        ans += "Fizz";
    }
    if (n % 5 === 0) {
        ans += "Buzz";
    }
    if (ans.length < 3)
        return n;


    return ans;


}

module.exports = fizzBuzz;
