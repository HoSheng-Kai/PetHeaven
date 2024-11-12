
function validateCreditCard(event) {
    const input = event.target;
    const inputValue = event.target.value;
    const regex = new RegExp(event.target.pattern);
    const errorElement = document.getElementById(event.target.id);
    
    if (inputValue.length != 16) 
    {
        input.setCustomValidity("Credit card number must be 16 digits long.");
    }
    else if(!regex.test(inputValue)){
        input.setCustomValidity("Credit card number must only contain digits.");
    }
    else{
        // "" = valid
        input.setCustomValidity("");
    }

    errorElement.textContent = input.validationMessage;
}

function validateAmount(event) {
    const input = event.target;
    const inputValue = event.target.value;
    const regex = new RegExp(event.target.pattern);
    const errorElement = document.getElementById(event.target.id);

    if (!regex.test(inputValue)){
        input.setCustomValidity("Amount must only contain digits.");
    }
    else{
        // "" = valid
        input.setCustomValidity("");
    }
    errorElement.textContent = input.validationMessage;
}

function validateEmail(event){
    const input = event.target;
    const inputValue = event.target.value;
    const regex = new RegExp(event.target.pattern);
    const errorElement = document.getElementById(event.target.id);

    if (!regex.test(inputValue)){
        input.setCustomValidity("Invalid email.");
    }
    else{
        // "" = valid
        input.setCustomValidity("");
    }
    errorElement.textContent = input.validationMessage;
}

function validateContact(event){
    const input = event.target;
    const inputValue = event.target.value;
    const regex = new RegExp(event.target.pattern);
    const errorElement = document.getElementById(event.target.id);

    if (inputValue.length != 8) 
    {
        input.setCustomValidity("Contact number should be 8 digits long.");
    }
    else if(!regex.test(inputValue)){
        input.setCustomValidity("Credit card number must only contain digits.");
    }
    else{
        // "" = valid
        input.setCustomValidity("");
    }
    errorElement.textContent = input.validationMessage;
}

export { validateCreditCard, validateAmount, validateEmail, validateContact };