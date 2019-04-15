var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>' + '<span style="color:black;">' + questions[i][1] + '</span>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);
    response = parseInt(response);
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = "You answered " + correctAnswers + " question(s) correctly.";
html += '<h2>You answered these questions correctly:</h2>';
html += buildList(correct);
html += '<h2>You answered these questions incorrectly:</h2>';
html += buildList(wrong);
print(html);
