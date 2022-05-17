// Validation Form
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const firstName = document.getElementById('firstName');
const firstNameError = document.querySelector('#firstName + span.error');
const phoneNumber = document.getElementById('phoneNumber');
const phoneNumberError = document.querySelector('#phoneNumber + span.error');
const checkBox = document.getElementById('checkbox');
const checkBoxError = document.querySelector('div.error-checkbox');
const textBox = document.getElementById('textbox');
const textBoxError = document.querySelector('#textbox + span.error');
const radio = document.getElementById('radio')
const radioError = document.querySelector('span.error-radio');
const radio1 = document.getElementById('women');
const radio2 = document.getElementById('man');
const radio3 = document.getElementById('other');
const successMessage = document.getElementById('success-message')

//Email Validation
email.addEventListener('input', function (event) {
    // check if the form fields are valid
    if (email.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
        email.className = 'form-control success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErroremail();
    }
});

email.addEventListener('submit', function (event) {
    // Each time the user types something, it checks if the form fields are valid
    if (email.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message.
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
        email.className = 'form-control';
    } else {
        // If there is still an error, it shows the correct error
        showErroremail();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, it let the form submit
    if(!email.validity.valid) {
        // If it isn't, it displays an appropriate error message
        showErroremail();
        event.preventDefault();
        email.className = 'form-control error-border';
    }
});

function showErroremail() {
    if(email.validity.valueMissing) {
        // If the field is empty, it display the following error message
        emailError.textContent = 'Sie müssen eine Email-Adresse angeben.';
    } else if(email.validity.patternMismatch) {
        // If the field doesn't contain an email address, it displays the following error message
        emailError.textContent = 'Ihre Eingabe muss eine gültige Email sein.';
    }
    // Set the styling appropriately
    emailError.className = 'error active';
    email.className = 'form-control error-border';
}

// Vorname Validation
firstName.addEventListener('input', function (event) {
    // check if the form fields are valid
    if (firstName.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        firstNameError.textContent = ''; // Reset the content of the message
        firstNameError.className = 'error'; // Reset the visual state of the message
        firstName.className = 'form-control success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErrorname();
    }
});

firstName.addEventListener('submit', function (event) {
    // Each time the user types something, it checks if the form fields are valid
    if (firstName.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message.
        firstNameError.textContent = ''; // Reset the content of the message
        firstNameError.className = 'error'; // Reset the visual state of the message
        firstName.className = 'form-control';
    } else {
        // If there is still an error, it shows the correct error
        showErrorname();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, it let the form submit
    if(!firstName.validity.valid) {
        // If it isn't, it displays an appropriate error message
        showErrorname();
        event.preventDefault();
        firstName.className = 'form-control error-border';
    }
});

function showErrorname() {
    if(firstName.validity.valueMissing) {
        // If the field is empty, it display the following error message
        firstNameError.textContent = 'Sie müssen Ihren Vornamen eingeben.';
    } else if(firstName.validity.patternMismatch) {
        // If the field does contain something else than alphabetic character, it displays the following error message
        firstNameError.textContent = 'Ihr Vorname darf nur Buchstaben enthalten';
    } else if(firstName.validity.tooShort) {
        // If the field is less character than 1, it displays the following error message
        firstNameError.textContent = 'Ihr eingegebener Vorname ist zu kurz.';
    }
    // Set the styling appropriately
    firstNameError.className = 'error active';
    firstName.className = 'form-control error-border';
}

// Telefonnummer Validation
phoneNumber.addEventListener('input', function (event) {
    // check if the form fields are valid
    if (phoneNumber.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        phoneNumberError.textContent = ''; // Reset the content of the message
        phoneNumberError.className = 'error'; // Reset the visual state of the message
        phoneNumber.className = 'form-control success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErrorphoneNumber();
    }
});

phoneNumber.addEventListener('submit', function (event) {
    // Each time the user types something, it checks if the form fields are valid
    if (phoneNumber.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message.
        phoneNumberError.textContent = ''; // Reset the content of the message
        phoneNumberError.className = 'error'; // Reset the visual state of the message
        phoneNumber.className = 'form-control';
    } else {
        // If there is still an error, it shows the correct error
        showErrorphoneNumber();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, it let the form submit
    if(!phoneNumber.validity.valid) {
        // If it isn't, it displays an appropriate error message
        showErrorphoneNumber();
        event.preventDefault();
        phoneNumber.className = 'form-control error-border';
    }
});

function showErrorphoneNumber() {
    if(phoneNumber.validity.valueMissing) {
        // If the field is empty, it display the following error message
        phoneNumberError.textContent = 'Sie müssen Ihren Nachnamen eingeben.';
    } else if(phoneNumber.validity.patternMismatch) {
        // If the field does contain something else than alphabetic character, it displays the following error message
        phoneNumberError.textContent = 'Sie müssen eine richtige Telefonnummer eingeben. Tipp: Achten Sie auf die Schreibweise.';
    }
    // Set the styling appropriately
    phoneNumberError.className = 'error active';
    phoneNumber.className = 'form-control error-border';
}

// Textbox Validation
textBox.addEventListener('input', function (event) {
    // check if the form fields are valid
    if (textBox.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        textBoxError.textContent = ''; // Reset the content of the message
        textBoxError.className = 'error'; // Reset the visual state of the message
        textBox.className = 'form-control success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErrortextBox();
    }
});

textBox.addEventListener('submit', function (event) {
    // Each time the user types something, it checks if the form fields are valid
    if (textBox.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message.
        textBoxError.textContent = ''; // Reset the content of the message
        textBoxError.className = 'error'; // Reset the visual state of the message
        textBox.className = 'form-control';
    } else {
        // If there is still an error, it shows the correct error
        showErrortextBox();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, it let the form submit
    if(!textBox.validity.valid) {
        // If it isn't, it displays an appropriate error message
        showErrortextBox();
        event.preventDefault();
        textBox.className = 'form-control error-border';
    }
});


function showErrortextBox() {
    if(textBox.validity.valueMissing) {
        // If the field is empty, it display the following error message
        textBoxError.textContent = 'Sie müssen eine Nachricht eingeben.';
    } else if (textBox.validity.tooShort) {
        textBoxError.textContent = 'Ihre Nachricht muss mindestens 5 Zeichen beinhalten.';
    }
    // Set the styling appropriately
    textBoxError.className = 'error active';
    textBox.className = 'form-control error-border';
}

// Zeichen Counter in Textarea UND Validation von maximalen Zeichen
let textArea = document.getElementById('textbox');
let characterCounter = document.getElementById('current');
const maxNumOfChars = 300;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = numOfEnteredChars;
    characterCounter.textContent = counter;
    if (counter == maxNumOfChars) {
        textBoxError.textContent = 'Ihre Nachricht kann maximal 300 Zeichen beinhalten.';
        textBox.className = 'form-control';
    }
};

textArea.addEventListener("input", countCharacters);

//Checkbox Validation
function showErrorcheckBox(form) {
    if (!form.checkbox.checked) {
        checkBoxError.textContent = 'Sie müssen dieses Feld angewählt haben, um Ihre eingegebenen Daten abzuschicken.';
        checkBoxError.className = 'error active';
        checkBox.className = 'form-check-input error-border';
        return false;
    } else {
        checkBoxError.textContent = ''; // Reset the content of the message
        checkBoxError.className = 'error'; // Reset the visual state of the message
        checkBox.className = 'form-check-input success-border';
        return true;
    }
}

checkBox.addEventListener('input', function (event) {
    // check if the form fields are valid
    if (checkBox.validity.valid) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        checkBoxError.textContent = ''; // Reset the content of the message
        checkBoxError.className = 'error'; // Reset the visual state of the message
        checkBox.className = 'form-check-input success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErrortextBox();
    }
});

// Radio Button Validation
function showErrorradio(form) {
    let getSelectedValue = document.querySelector('input[name="flexRadioDefault"]:checked');
    if (getSelectedValue == null) {
        radioError.textContent = 'Sie müssen eine Auswahl treffen.';
        radioError.className = 'ms-2 error active';
        radio1.className = 'form-check-input error-border';
        radio2.className = 'form-check-input error-border';
        radio3.className = 'form-check-input error-border';
        return false;
    } else {
        radioError.textContent = ''; // Reset the content of the message
        radioError.className = 'error'; // Reset the visual state of the message
        radio1.className = 'form-check-input success-border';
        radio2.className = 'form-check-input success-border';
        radio3.className = 'form-check-input success-border';
        return true;
    }
}

radio.addEventListener('input', function (event) {
    // check if the form fields are valid
    let getSelectedValue = document.querySelector('input[name="flexRadioDefault"]:checked');
    if (getSelectedValue != null) {
        // In case there is an error message visible, if the field is valid, it removes the error message
        radioError.textContent = ''; // Reset the content of the message
        radioError.className = 'error'; // Reset the visual state of the message
        radio1.className = 'form-check-input success-border';
        radio2.className = 'form-check-input success-border';
        radio3.className = 'form-check-input success-border';
    } else {
        // If there is still an error, it shows the correct error
        showErrorradio();
    }
});

//Success Meldung
function showSuccess() {
    if (email.className = 'form-control success-border',
        checkBox.className = 'form-check-input success-border',
        textBox.className = 'form-control success-border',
        phoneNumber.className = 'form-control success-border',
        firstName.className = 'form-control success-border',
        radio1.className = 'form-check-input success-border'){
            successMessage.textContent = 'Das Formular mit Ihren eingegebenen Daten wurde erfolgreich abgeschickt.'; // Show the Success Message
    }
}

// Neuladen verhindern
form.onsubmit = function() {
    return false;
}

// Beispiel Ausfüllen für Fomular
/**
 *
 * @type {string}
 */
//Json erstellt und in var eigefügt
let autofillData = '{"name":"Max Muster", "email":"max.muster@example.com", "betreff":"example betreff", "nachricht":"example nachricht"}';

/**
 *
 * @type {any}
 */
// Objekt autofill wird erstellt //nutzbar gemacht für js
const autofillClass = JSON.parse(autofillData);


// Füllt Formular aus (Hohlt values aus JSON Objekt)
function autofill() {
    document.getElementById('firstName').value = autofillClass.firstName;
    document.getElementById('mail').value = autofillClass.email;
    document.getElementById('betreff').value = autofillClass.betreff;
    document.getElementById('textblock').value = autofillClass.nachricht;
}