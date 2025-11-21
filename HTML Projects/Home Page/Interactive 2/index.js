// Temperature Converter

// Create variables for each function ID in the  "Interactive 2" HTML file
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

// Add a new variable that can have the value changed for the temperature
let temp;

// A new function for the conversion of each temperature
function convert(){

    // Checks if the "toFahrenheit" radio is checked, then makes the temp variable equal to the "textBox" and declares it as a number value. 
    // The temp value is then converted to the correct value using the included formula. Displays the result of "temp" as text within the "result" variable
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    // Checks if the "toCelcius" radio is checked, then makes the temp variable equal to the "textBox" and declares it as a number value. 
    // The temp value is then converted to the correct value using the included formula. Displays the result of "temp" as text within the "result" variable
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    // If no radio function is checked, this will pop up as the result
    else{
        result.textContent = "Select a unit";
    }
}