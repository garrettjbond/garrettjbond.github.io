const quiz = [
    ["What is Superman's secret identity?","Clark Kent"],
    ["What is Batman's secret identity?", "Bruce Wayne"],
    ["What is Spider-man's secret identity?", "Peter Parker"]
]

let score = 0;

for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    }
    else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

//Report the user's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);