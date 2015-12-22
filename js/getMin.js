(function() {
    "use strict";

    function getMin(a, b, c) {
        var result = arguments[0];
        if (arguments[1] < result) {
            result = arguments[1];
        }
        if (arguments[2] < result) {
            result = arguments[2];
        }
        return result;
    }
    console.log(getMin(3, -5, -3));
})();