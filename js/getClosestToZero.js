(function() {
    "use strict";

    function getClosestToZero() {
        var result = arguments[0];
        var i;
        for (i = 1; i < arguments.length; i++) {
            if (Math.abs(result) > Math.abs(arguments[i])) {
                result = arguments[i];
            }
        }
        return result;
    }
    console.log(getClosestToZero(-7, 5, -3, 8, 2, 9));
})();