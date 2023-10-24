let mail=document.getElementById('mail');
let pswd=document.getElementById('password');
let strengthText=document.getElementById('strengthText');
let phoneNumber=document.getElementById('phoneNumber');
var cnpswd=document.getElementById('confirmpassword');

var hasUppercase =/[A-Z]/.test(password);
var hasLowercase =/[a-z]/.test(password);
var hasNumber =/[0-9]/.test(password);
var hasSpecialChar = /[!@#$%^&*]/.test(password);
let regex=/^([A-Za-z0-9\#_.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})?$/
let phoneRegex = /^\d{10}$/.test(phoneNumber);


function verifymail()
{
    if(regex.test(mail.value))
    {
        alert('email is valid');
    }
    else{
        alert('email is not valid');
    }
}






function verifypassword()
{
    if(!hasUppercase || !hasLowercase || !hasNumber) 
    {
        alert("password must contain atleast one uppercase letter, one lowercase letter, and one number");
    }
    if(password.value!= confirmpassword.value)
    {
        alert('Password do not match');
    }
    if(password.length<8)
    {
        alert('password must be atleast 8 characters long');
    }
}

function checkPasswordStrength()
{
    var strength = 0;

    if (password.length >= 8) {
        strength++;
    }
    if (hasUppercase && hasLowercase) {
        strength++;
    }
    if (hasNumber) {
        strength++;
    }
    if (hasSpecialChar) {
        strength++;
    }

    // Update the strengthText element based on the password strength
    if (strength == 4) {
        strengthText.textContent = "Strong";
        strengthText.className = "strong";
    } else if (strength >= 2) {
        strengthText.textContent = "Medium";
        strengthText.className = "medium";
    } else {
        strengthText.textContent = "Poor";
        strengthText.className = "poor";
    }
}


function validatePhoneNumber() {
  //var phoneNumber = "1234567890";
  if (phoneRegex.test(phoneNumber.value)) 
  {
    console.log("Valid phone number");
  } else {
    console.log("Invalid phone number");
  }
}
