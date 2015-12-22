(function() {
    "use strict";

    function getMin() {
        var result = arguments[0];
        var i;
        for (i = 1; i < arguments.length; i++) {
            if (arguments[i] < result) {
                result = arguments[i];
            }
        }
        return result;
    }
    console.log(getMin(3, -5, -3, 5, 10, -12, 20, -50, 25));
})();