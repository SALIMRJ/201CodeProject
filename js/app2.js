'usestrict';
var number = 12;

var list = ['black', 'blue', 'red']
alert('In this game you have to guess again which colors I prefer, and you have six attempts as well');
console.log('In this game you have to guess again which colors I prefer, and you have six attempts as well');
F6Q();
F7Q();
function F6Q() {
    alert('You are going to play a guessing game. We have a number between 0 and 15. You should expect the number. You have six attempts');
    console.log('You are going to play a guessing game. We have a number between 0 and 15. You should expect the number. You have six attempts');
    var expect;
    var i;
    for (i = 1; i <= 6; i++) {
        expect = prompt('Attempt ' + i + ' ,enter numper ');
        console.log('Attempt ' + i + ' ,enter numper ');
        if (expect == Number(number)) {
            alert('Correct');
            if (i == 1) {
                alert('Amazing From the first try');
                console.log('Amazing From the first try');
            }
            grade++;
            break;
        }
        else if (expect < Number(number)) {
            alert('too low');
            console.log('too low');
        }
        else {
            alert('too high');
            console.log('too high');
        }

    };
    if (i == 7) {

        alert('The correct ansser is 12 ');
        console.log('The correct ansser is 12 ');

    };
}

function F7Q() {
    var color;
    var i2;
    for (i2 = 1; i2 <= 6; i2++) {
        color = prompt('Attempt ' + i2 + ' ,enter color you guess');
        console.log('Attempt ' + i2 + ' ,enter color you guess');
        switch (color.toLowerCase()) {
            case list[0]:
            case list[1]:
            case list[2]: alert('Correct Ansser'); console.log('Correct Ansser'); i2 = 10; grade++; break;
            default: alert('Wrong Ansser'); console.log('Wrong Ansser');
        }

    }
    if (i2 == 7) {

        alert('the colors is ' + list);
        console.log('the colors is ' + list);
    };

    alert('your grade is ' + grade + ' from 7');
    console.log('your grade is ' + grade + ' from 7');

}



