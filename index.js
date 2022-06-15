var submit = document.querySelector('.submit');
var greet = document.querySelector('.greet');
var bmiDiv = document.querySelector('.bmi');
var form = document.querySelector('form');
var chart = document.querySelector('.chart');

var finalWrapper = document.querySelector('.final-wrapper')

var bmi;

var newDiv1 = document.createElement('div');
var newDiv2 = document.createElement('div');
var newDiv3 = document.createElement('div');


//preloader

const preloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
      preloader.style.display = 'none'
    } 
  }, 1100);


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
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES-WG.pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION-WG.pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID-WG.pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD-WG.pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA-WG.pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="WEIGHTGAIN-V(1).pdf" download">Download</a>';
    }

    //under, non-veg
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Underweight' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="WEIGHTGAIN-N.pdf" download">Download</a>';
    }

    //normal, veg
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Diabetes') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES-WG.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION-WG.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID-WG.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD-WG.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA-WG.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HEALHY DIET-V.pdf" download">Download</a>';
    }

    //normal, non-veg
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD DIET.pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA DIET(2).pdf" download">Download</a>';
    }
    if (condition === 'Healthy' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="NORMAL WEIGHT-N.pdf" download">Download</a>';
    }

    //over, veg
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Diabetes') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES-WL.pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION-WL.pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID-WL.pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD-WL.pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA-WL.pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="WEIGHTLOSS-V.pdf" download">Download</a>';
    }

    //over, non-veg
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Diabetes') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="DIABETES DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Hypertension') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="HYPERTENSION DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Thyroid') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="THYROID DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'PCOD') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="PCOD DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'Anemia') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="ANEMIA DIET(1).pdf" download">Download</a>';
    }
    if (condition === 'Overweight' && foodName === 'Non-Vegeterian' && diseaseName === 'None') {
        newDiv3.classList.add('div3');
        chart.append(newDiv3);
        newDiv3.innerHTML = '<a class="diet-btn" href="WEIGHTLOSS-N.pdf" download">Download</a>';
    }
}



function scrollWin() {
    window.scrollBy(0, 450);
}



//for sound

var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}



