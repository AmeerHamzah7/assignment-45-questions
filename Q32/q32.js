/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.*/
//• Make a list of five or more usernames called current_users.
var current_users = ["hamza", "usman", "Kamran", "shafiq", "yasir"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Hamza", "umair", "kamran", "haroon", "waqas"];
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (newU_check) {
    //checking if the userName already exist or not
    var condition = current_users.some(function (current_check) { return current_check.toLowerCase() === newU_check.toLowerCase(); });
    //printing the message on the basis of username availablity
    if (condition) {
        console.log("Sorry ".concat(newU_check, " is already been used, please enter a new username"));
    }
    else {
        console.log("This username ".concat(newU_check, " is availale"));
    }
});
