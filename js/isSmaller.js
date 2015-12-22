(function() {
    "use strict";

    function isBigger(a, b) {
        var result = a > b;
        return result;
    }

    function isSmaller(a, b) {
        var result = !isBigger(a, b);
        return result;
    }
    console.log(isSmaller(5, 3));
})();