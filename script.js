const calculateBtn = document.getElementById('calculate');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultOutput = document.querySelector('#result');
const commentOutput = document.querySelector('.comment');

calculateBtn.addEventListener('click', function () {
  const heightValue = Number(heightInput.value);
  const weightValue = Number(weightInput.value);

  if (isNaN(heightValue) || isNaN(weightValue)) {
    alert('Please enter valid height and weight values!');
    return;
  }

  const heightInMeters = heightValue / 100;
  const bmiValue = weightValue / (heightInMeters * heightInMeters);
  const roundedBmiValue = bmiValue.toFixed(2);

  resultOutput.innerHTML = roundedBmiValue;

  let status = '';

  if (bmiValue < 18.5) {
    status = 'Underweight 😒';
  } else if (bmiValue < 25) {
    status = 'Normal Weight 😍';
  } else if (bmiValue < 30) {
    status = 'Overweight 😮';
  } else {
    status = 'Obese 😱';
  }

  commentOutput.innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
