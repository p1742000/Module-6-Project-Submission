let globalIsSubmit = false;

function validate(isSubmit, btnClicksubmit=false) {

    if(isSubmit){
        globalIsSubmit = true;
    }
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let tandc = document.getElementById('tandc').checked;

    let error = false;


    if (globalIsSubmit) {
        // First Name conditions
        if (firstName.length >= 3) {
            document.getElementById('first-name-valid').style.display = "block";
            document.getElementById('first-name-invalid').style.display = "none";
            // console.log('First Name is valid.');
        }
        else {
            document.getElementById('first-name-invalid').style.display = "block";
            document.getElementById('first-name-valid').style.display = "none";
            error = true;
            // console.log('First Name is Invalid.')
        }

        // Last Name conditions :-
        if (lastName.length >= 3) {
            document.getElementById('last-name-valid').style.display = "block";
            document.getElementById('last-name-invalid').style.display = "none";
            // console.log('Last Name is valid.');
        }
        else {
            document.getElementById('last-name-invalid').style.display = "block";
            document.getElementById('last-name-valid').style.display = "none";
            error = true;
            // console.log('Last Name is Invalid.')
        }

        /* Email :-
        1.) must includes '@'
        2.) must includes '.'
        3.) Alteast 1 character before '@'
        4.) Atleast 2 characters after '.'
        */
        if (email.includes('@') &&
            email.includes('.') &&
            !email.startsWith('@') &&
            email.substr(email.lastIndexOf('.') + 1).length >= 2) {
            // !email.endsWith('.') && email.indexOf('.') != email.length-2){
            document.getElementById('email-valid').style.display = "block";
            document.getElementById('email-invalid').style.display = "none";
            // console.log(email.includes('@'));
        }
        else {
            document.getElementById('email-invalid').style.display = "block";
            document.getElementById('email-valid').style.display = "none";
            error = true;
            // console.log(email.includes('@'));
        }


        // Password Validation 
        let specialCharacter = password.includes('$') || password.includes('#') || password.includes('@');
        let AtleastOneNumber = password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4');
        if(password.length >= 8 && ( specialCharacter) && (AtleastOneNumber)){
            document.getElementById('password-valid').style.display = "block";
            document.getElementById('password-invalid').style.display = "none";
        }
        else{
            document.getElementById('password-invalid').style.display = "block";
            document.getElementById('password-valid').style.display = "none";
        }

        if(password.length != 0 && confirmPassword === password){
            document.getElementById('confirm-password-valid').style.display = "block";
            document.getElementById('confirm-password-invalid').style.display = "none";
        }
        else{
            document.getElementById('confirm-password-invalid').style.display = "block";
            document.getElementById('confirm-password-valid').style.display = "none";
            error = true;
        }


        if (tandc) {
            document.getElementById('tandc-valid').style.display = "block";
            document.getElementById('tandc-invalid').style.display = "none";
        }
        else {
            document.getElementById('tandc-invalid').style.display = "block";
            document.getElementById('tandc-valid').style.display = "none";
            error = true;
        }

        if( error === false){
            // globalIsSubmit = false;
            if(btnClicksubmit){
                alert("Your details have been saved successfully!");
                resetFields();
            }
            
        }
    }
}

function resetFields(){

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('tandc').checked = false;


    document.getElementById('first-name-valid').style.display = "none";
    document.getElementById('last-name-valid').style.display = "none";
    document.getElementById('email-valid').style.display = "none";
    document.getElementById('password-valid').style.display = "none";
    document.getElementById('confirm-password-valid').style.display = "none";
    document.getElementById('tandc-valid').style.display = "none";
}
