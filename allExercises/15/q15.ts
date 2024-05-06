//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList:string[] = ["Hamza", "Daniyal", "Usman", "Farhan"];

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//Daniyal can't come to the dinner
let cantAttend = guestList.splice(1,1);
console.log(guestList);

// Now inviting remaining ones
let reInvitation = guestList.forEach(guest => console.log(`Hey Mr. ${guest}, you're still invited to the dinner`))