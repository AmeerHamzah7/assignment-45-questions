//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guestList = ["Hamza", "Daniyal", "Usman", "Farhan", "Aamir"];
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guestList.forEach(function (guest) { return console.log("Hey ".concat(guest, ", here is a good news, we've got a bigger table, so now more guests are coming")); });
// Add one new guest to the beginning of your array.
var addingNewGuest = guestList.unshift("Salman");
// Add one new guest to the middle of your array. • Add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//adding guest to the middle of array
var newGuestMiddle = guestList.splice(Math.floor(guestList.length / 2), 0, "Umair");
//sending invitation to each guest
guestList.forEach(function (guest) { return console.log("Hey Mr. ".concat(guest, ", you're invited to the dinner")); });
