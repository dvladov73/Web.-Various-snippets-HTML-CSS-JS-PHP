var phoneInput = document.getElementById('phone');
var myForm = document.forms.myForm;
//var result = document.getElementById('result');  // only for debugging purposes

phoneInput.addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

//myForm.addEventListener('submit', function(e) {
//  phoneInput.value = phoneInput.value.replace(/\D/g, '');
 // result.innerText = phoneInput.value;  // only for debugging purposes
  
 // e.preventDefault(); // You wouldn't prevent it
//});

var fields={}

document.addEventListener("DOMContentLoaded",function() {
    fields.Name = document.getElementById('Name');
    fields.Company = document.getElementById('Company');
    fields.email = document.getElementById('email');
    fields.phone = document.getElementById('phone');
    fields.question = document.getElementById('question');
  })



   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
     
    return valid;
   }

   class User {
    constructor(Name, Company, email, phone, question) {
    this.Name = Name;
    this.Company = Company;
    this.email = email;
    this.phone = phone;
    this.question = question;
    }
   }
   function sendContact(){
    if (isValid()){
        let usr=new User (Name.value,Company.value,email.value,phone.value,question.value);
        alert(`${usr,Name} thank you for the message`)
    }
    else{
        //alert(`Sorry. There was an error. Please try again`)
        alert(`Name-${Name}`)
    }
   }