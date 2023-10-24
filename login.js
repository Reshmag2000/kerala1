
let email=document.getElementById('email');
let pswd=document.getElementById('psw');
let regex=/^([A-Za-z0-9\#_.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})?$/

function validate()
{
    if(email.value==''&&pswd.value=='')
    {
        alert('Fields cannot be empty');
        email.style.border="4px solid red";
        pswd.style.border="4px solid red";
    }
  

    else if(email.value=="")
    {
        alert('Email cannot be empty');
        email.style.border="4px solid red";
    }
    else if( pswd.value=="")
    {
        alert('Password cannot be empty');
        pswd.style.border="4px solid red";
    }
    
    else if(pswd.value.length<8)
    {
        alert('password should have minimum 8 characters');
        pswd.style.border="4px solid red";

    }
    else
    {
        alert('Form submitted');
    }
}

function emailvalid()
{
    if(regex.test(email.value))
    {
        alert('email is valid');
    }
    else
    {
        alert('invalid email');
    }
}

function message()
{
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
}