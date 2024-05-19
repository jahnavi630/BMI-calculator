// Get the input elements and result element
const heightInput = document.getElementById('bmiheight');
const weightInput = document.getElementById('bmiWeight');
const bmiResult = document.getElementById('bmi result');

// Define the CalculateBMI function
function CalculateBMI() {
  // Get the height and weight values from the input elements
  const heightValue = parseFloat(heightInput.value);
  const weightValue = parseFloat(weightInput.value);

  // Check if the height and weight values are valid
  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    alert('Please enter valid height and weight values.');
    return;
  }

  // Convert height and weight units (if necessary)
  let convertedHeightValue = heightValue;
  let convertedWeightValue = weightValue;
  const heightUnit = document.getElementById('heightunit').value;
  const weightUnit = document.getElementById('Weightunit').value;

  if (heightUnit !== '') { // Check if unit selection is made
    convertedHeightValue /= 100; // Convert feet to meters (default)
    if (heightUnit === 'Inch') {
      convertedHeightValue /= 0.0254; // Convert inches to meters
    }
  } else {
    return; // No height unit selected, exit function
  }

  if (weightUnit === 'Pound') {
    convertedWeightValue *= 0.453592; // Convert pounds to kilograms
  }

  // Calculate the BMI
  const bmiValue = (convertedWeightValue / Math.pow(convertedHeightValue, 2)).toFixed(2);

  // Display the BMI result
  bmiResult.textContent = bmiValue;

  // Determine the BMI category
  let bmiCategory;
  if (bmiValue < 18.5) {
    bmiCategory = 'Underweight : <span>${bmiValue}</span>';
   
  } else if (bmiValue < 24.9) {
    bmiCategory = 'Normal weight : <span>${bmiValue}</span>';
  } else if (bmiValue < 29.9) {
    bmiCategory = 'Overweight : <span>${bmiValue}</span>';
  } else {
    bmiCategory = 'Obesity : <span>${bmiValue}</span>';
  }
  

  // Display the BMI category
  document.getElementById('bmiCategoryInfo').style.display = 'block';
  const categoryListItems = document.getElementById('bmiCategoryInfo').getElementsByTagName('li');
  categoryListItems[Number(bmiCategory.slice(-1)) - 1].style.fontWeight = 'bold';
}

// Get the reset button and add a click event listener
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  heightInput.value = '';
  weightInput.value = '';
  bmiResult.textContent = '00';
  document.getElementById('bmiCategoryInfo').style.display = 'none';
  const categoryListItems = document.getElementById('bmiCategoryInfo').getElementsByTagName('li');
  for (let i = 0; i < categoryListItems.length; i++) {
    categoryListItems[i].style.fontWeight = 'normal';
  }
});

