//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var myFriends = ["Hamza", "Daniyal", "Usman", "Irfan"];
myFriends.forEach(function (friend) {
    return console.log("Hello ".concat(friend, ", how are you?"));
});
