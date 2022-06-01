var submit = document.querySelector('.submit');
var greet = document.querySelector('.greet');
var bmiDiv = document.querySelector('.bmi');
var form = document.querySelector('form');

var finalWrapper = document.querySelector('.final-wrapper')

var bmi;

var newDiv1 = document.createElement('div');
var newDiv2 = document.createElement('div');




form.addEventListener('submit', (e) => {
    finalWrapper.style.display = 'block';
    playAudio();
    handleSubmit(e);
    bmiCalculator();
    diseaseFoodAndBMI();
    scrollWin();
})


var condition;
function bmiCalculator() {
    var height = parseInt(document.querySelector('.height').value);
    var weight = parseInt(document.querySelector('.weight').value);

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);

    if (bmi < 18.5) {
        condition = 'Underweight';
    }
    if (bmi > 18.5 && bmi < 25) {
        condition = 'Healthy';
    }
    if (bmi > 25) {
        condition = 'Overweight';
    }

    bmiDiv.append(newDiv2);
    newDiv2.innerHTML = 'a) Your BMI is: ' + bmi + '<br>b) You are: ' + condition + '<br><br>Now you can download your personalized Diet Chart :)';
}



function handleSubmit(event) {
    event.preventDefault();
    var userName = document.querySelector('.name');
    newDiv1.innerHTML = 'We hope you are doing great, ' + userName.value + '!';
    greet.append(newDiv1);
}



function diseaseFoodAndBMI() {
    var diseaseName = document.querySelector('#diseases').value;
    var foodName = document.querySelector('#foods').value;

    //under, veg
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess1');
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess2');
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess3');
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess4');
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess5');
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'None') {
        console.log('Succsess6');
    }

    //under, non-veg
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess11');
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess12');
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess13');
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess14');
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess15');
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        console.log('Succsess16');
    }

    //normal, veg
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess111');
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess112');
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess113');
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess114');
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess115');
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'None') {
        console.log('Succsess116');
    }

    //normal, non-veg
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess1111');
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess1112');
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess1113');
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess1114');
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess1115');
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        console.log('Succsess1116');
    }

    //over, veg
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess11111');
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess11112');
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess11113');
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess11114');
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess11115');
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'None') {
        console.log('Succsess11116');
    }

    //over, non-veg
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        console.log('Succsess111111');
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        console.log('Succsess111112');
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        console.log('Succsess111113');
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        console.log('Succsess111114');
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        console.log('Succsess111115');
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        console.log('Succsess111116');
    }
}



function scrollWin() {
    window.scrollBy(0, 250);
}



//for sound

var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}



