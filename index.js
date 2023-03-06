const fullNameId = document.getElementById("fullNameId");
const usernameId = document.getElementById("usernameId");
const emailid = document.getElementById("emailid");
const phonenumberid = document.getElementById("phonenumberid");
const passwordid = document.getElementById("passwordid");
const confirmpasswordid = document.getElementById("confirmpasswordid");
const SubmitButton=document.getElementById("SubmitButton")
const maleInput=document.getElementById("maleInput")
const femaleleInput=document.getElementById("femaleInput")
const errorMessage =document.getElementById("errorMessage")

const letterRegEx = /^[a-zA-Z ]+$/;
const eemailRegEx = /^w+@[a-zA-Z_] +?\.[a-zA-Z]{2,3}$/;
const phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

SubmitButton.addEventListener("click", ()=> {
        if(fullNameId.value.length === 0 ||
            usernameId.value.length === 0 ||
         emailid.value.length===0 ||
        phonenumberid.value.length===0 ||
        passwordid.value.length ===0 ||
        confirmpasswordid.value.length ===0
        ){
        return errorMessage.innerHTML= "All fields are required"
    }

    if(!maleInput.checked || femaleleInput.checked){
        return errorMessage.innerHTML="Must choose gender"
    }

    if(phoneNumberRegEx.test(phonenumberid.value) ===false) {
        return errorMessage.innerHTML = "Invalid Phone number "
    }

    if(letterRegEx.test(fullNameId.value) ===false) {
        return errorMessage.innerHTML = "Full Name must contain letters "
    }

    if(eemailRegEx.test(emailid.value)===false){
        return errorMessage.innerHTML = "Invalid Email "
    }
    if(passwordid.value !== confirmpasswordid.value){
        return errorMessage.innerHTML= "Passwords do NOT match"
      
    }

    return errorMessage.innerHTML = ''
})