//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//defining a parameter with rest parameter
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking sandwich with the following items:");
    items.forEach(function (itemzz) { return console.log(itemzz); });
    console.log("Sandwich is ready to eat");
}
//call function 3 times with different arguments
//1st time
sandwich("chicken", "mayonise", "salt");
//2nd time
sandwich("blackpaper", "chicken", "egg", "tomato_ketchup");
//3rd time
sandwich("butter", "salt", "blackpaper");
