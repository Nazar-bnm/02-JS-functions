(function() {
    "use strict";

    function isPrime(integer) {
        var i;
        for (i = 2; i < integer; i++) {
            if (integer % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(8));
    console.log(isPrime(19));
})();