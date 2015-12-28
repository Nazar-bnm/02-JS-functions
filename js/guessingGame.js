(function() {
    "use strict";

    function guessingGame() {
        var number = Math.round(Math.random() * 100);
        var userNumber = prompt("Enter a number from 0 to 100", 50);
        var message;
        while (number != userNumber) {
            if (userNumber === null) {
                break;
            } else if (isNaN(userNumber)) {
                alert("It isn't a number!");
                userNumber = prompt("Enter a number from 0 to 100", 50);
            } else if (number < userNumber) {
                alert("Our number is lower, try again");
                userNumber = prompt("Enter a number from 0 to 100", 50);
            } else if (number > userNumber) {
                alert("Our number is higher, try again");
                userNumber = prompt("Enter a number again", 50);
            }
        }
        if (userNumber == number) {
            message = "You are right, the number is " + number;
        } else {
            message = "interrupted by user";
        }
        return alert(message);
    }
    guessingGame();
})();