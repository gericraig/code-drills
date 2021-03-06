// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function questionOne() {
    alert("Question 1");
}

setTimeout(questionOne, 5000);



console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function questionTwo() {
    alert("Question 2");
}

setTimeout(questionTwo, 15000);

// Remove the timer you just made for Question 2

function myStopFunction() {
    clearInterval(questionTwo);
}

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
function questionThree() {
    alert("Question 3 part 1");
}

setTimeout(questionThree, 15000)

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function questionThreeTwo() {
    alert("Question 3 part 2");
}

setTimeout(questionThreeTwo, 16000)


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
function myStopFunction() {
    clearInterval(questionThree);
}

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(function() {console.log("Question 5 Completed!")}, 11000);

