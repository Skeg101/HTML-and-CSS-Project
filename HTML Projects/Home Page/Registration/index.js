// REGISTRATION PAGE    
// Loads all of the verification code straight after the HTML file has loaded. Usually would load after everything is done 
document.addEventListener("DOMContentLoaded", function() {

    // Creates a variable named "registrationForm", that refers to the HTML form id named "registration-form"
    const registrationForm = document.getElementById("registration-form");
    
    // A variable is made for the "password" and "confirmPassword" HTML labels. The labels are named "passwordEl1" and "confirmPassowrdEl1" respectively
    const passwordEl1 =  registrationForm.elements["password"]
    const confirmPasswordEl1 =  registrationForm.elements["confirmPassword"]
    
    // Generates a variable named "successMessage" for the HTML id "success-message"
    const successMessage = document.getElementById('success-message')
    
    // A variable is made to check if the text matches when the "password" and "confirmPassword" HTML labels are clicked
    passwordEl1.oninput = validatePasswordMatch
    confirmPasswordEl1.oninput = validatePasswordMatch
    
    // Creates a function to check if the text entered in the "password" and "confirmPassword" labels are the same, using the variable created on lines 16 and 17
    function validatePasswordMatch(){
        
        // A new variable named "formData" is made for when new data for the form is made, using the "registrationForm" variable to check this
        const formData = new FormData(registrationForm)
        
        // Two new variables are made to get information from the "password" and "confirmPassword" HTML labels, each time a new form is created
        const password = formData.get("password")
        const confirmPassword = formData.get("confirmPassword")
        
        // A variable is created to check if the previously created variable "password" is equal to the "confirmPassword" variable
        const passwordMatch = password === confirmPassword
        
        // If the passwords don't match a validity message is created, letting the user know they don't match and creating a new "validityMessage" variable
        const validityMessage = passwordMatch ? '' : "Passwords do not match"
        confirmPasswordEl1.setCustomValidity(validityMessage)
    }
    
    // Creates an event once the user submits the registration form, letting them know if it is submitted successfully
    registrationForm.onsubmit = function (event) {
        event.preventDefault();
        
        const formData = new FormData(registrationForm)
        
        // A resignable variable is made named "message" to display a set of text if the information has been submitted successfully
        let message = "Form Submitted Successfully\n"
        
       // Makes sure the value and name of the "confirmPassowrd" and "password" HTML labels are equal. Also creates a message on a new line with the name and value variable info
        formData.forEach(function(value, name){
            if (name === "confirmPassword") return
            if (name === "password") value = "*".repeat(value.length)
                message +=  `\n${name}: ${value}`
        })
        
        // Creates a in-browser pop-up with the results of the variable "message"
        alert(message);
        
        // Resets the form when the "reset" input is clicked
        registrationForm.reset()
    }
})