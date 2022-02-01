function d6() {
    var roll = Math.random();
    roll = 6 * roll;
    roll = Math.floor(roll) + 1;
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);









// Consult the Oracle


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function fortuneTeller(answerArr) {
    var randomSelection = Math.floor(answerArr.length * Math.random());
    console.log(answerArr[randomSelection]);
    return answerArr[randomSelection];
}

fortuneTeller(lifesAnswers);