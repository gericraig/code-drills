// Alerts, Prompts and Writing to DOM 2



// Using the `confirm` method, welcome the user to the Boba Shop and ask them if they would like a boba
// Store the user response in a variable `wantsBoba`
var wantsBoba = confirm("welcome to the Boba Shop, would you like a boba?");


// Create an if statement checking whether the user wanted boba from the earlier `confirm` dialogue
if (wantsBoba === true); {


    // Declare a variable `drinkFlavor`
    var drinkFlavor;

    
    // Prompt the user for what flavor they would like for their drink
    // Store their response into the variable `drinkFlavor`
    var drinkFlavor = prompt("what flavor you would like for you drink?");

    
    
    // Write to the DOM a message to the user telling them that their drink will be ready soon.
    // Use string concatenation in order to specify the flavor of their drink
    document.write("Your " + drinkFlavor + " boba will be ready soon!");

    
// Else, write "Goodbye! Come back soon!" to the DOM
else { 
    document.write("Goodbye! Come back soon!")
}

