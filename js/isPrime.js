(function() {
    "use strict";

    function isPrime(integer) {
        var number;
        var i;
        for (i = 2; i < integer; i++) {
            number = integer / i;
            if (number === Math.round(number)) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(19));
})();