function validateForm() {
    // Get form inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    // Get error message element
    const errorMessage = document.getElementById("error-message");
  
    // Check if name field is empty
    if(!name.value){
        errorMessage.textContent = "Please fill out the name field.";
        
    }
    if(name.value.length>25){
        errorMessage.textContent = "Name should not be greater than 25 characters.";
        
    }
    if(!email.value){
        errorMessage.textContent = "Please fill out the email field.";
        
    }
    if(!/\S+@\S+\.\S+/.test(email.value)){
        errorMessage.textContent = "Please enter a valid email address.";
       
    }
    if(!password.value){
        errorMessage.textContent = "Please fill out the password field.";
        
    }
    if(password.value.length<8 || password.value.length>20){
        errorMessage.textContent = "Password should be between 8 and 20 characters.";
        
    }
    
    // Create new p elements to display name and password
    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${name.value}`;
    const passwordP = document.createElement("p");
    passwordP.textContent = `Password: ${password.value}`;
    
    // Append new p elements to body
    document.body.appendChild(nameP);
    document.body.appendChild(passwordP);
    
    return true;
}
