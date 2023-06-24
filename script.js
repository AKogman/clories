document.addEventListener("DOMContentLoaded", function() {
    const ageInput = document.getElementById("age");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const activityLevelSelect = document.getElementById("activity-level");
    const ageRangeInput = document.getElementById("age-range");
    const heightRangeInput = document.getElementById("height-range");
    const weightRangeInput = document.getElementById("weight-range");
    const ageValue = document.getElementById("age-value");
    const heightValue = document.getElementById("height-value");
    const weightValue = document.getElementById("weight-value");
    const calculateBtn = document.getElementById("calculate-btn");
    const caloriesOutput = document.getElementById("calories");

    // Update input values when range sliders change
    ageRangeInput.addEventListener("input", function() {
        ageInput.value = ageRangeInput.value;
        ageValue.textContent = ageRangeInput.value;
    });

    heightRangeInput.addEventListener("input", function() {
        heightInput.value = heightRangeInput.value;
        heightValue.textContent = heightRangeInput.value;
    });

    weightRangeInput.addEventListener("input", function() {
        weightInput.value = weightRangeInput.value;
        weightValue.textContent = weightRangeInput.value;
    });

    // Calculate calories on button click
    calculateBtn.addEventListener("click", function() {
        const age = parseInt(ageInput.value);
        const height = parseInt(heightInput.value);
        const weight = parseInt(weightInput.value);
        const activityLevel = parseFloat(activityLevelSelect.value);

        if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
            const calories = calculateCalories(age, height, weight, activityLevel);
            caloriesOutput.value = calories;
        }
    });

    // Calculate calories based on the Harris-Benedict equation
    function calculateCalories(age, height, weight, activityLevel) {
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        const calories = bmr * activityLevel;
        return calories.toFixed(0);
    }
});
