var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var allname = document.querySelector("#name");
var result= document.querySelector("#result");
var error_name= document.querySelector("#error_name");
var error_email= document.querySelector("#error_email");
var error_phone= document.querySelector("#error_phone");
var icon_sun = document.querySelector("#icon_sun");
var icon_moon = document.querySelector("#icon_moon");
var icon = document.querySelector("#icon");

result.addEventListener("click",function(event){


    event.preventDefault();

    if(allname.value == "" && email.value == "" && phone.value == ""){

        error_name.innerHTML="This field is required";
        error_email.innerHTML="This field is required";
        error_phone.innerHTML="This field is required";
        return false;
        
    }else {
        
        
        error_name.innerHTML  = "";
        error_email.innerHTML = "";
        error_phone.innerHTML = "";
    }
     
    if( allname.value == "" || allname.value.trim() == "" ){

        error_name.innerHTML="This field is required";      
        return false;
        
    }else if( allname.value.length < 3 || allname.value.length > 15 ){

        error_name.innerHTML="please Enter Name Between 2-15 character ";      
        return false;
        
    }else if(!isNaN(allname.value.charAt(0)) || allname.value.charAt(0) == " " ){

        error_name.innerHTML="please Enter Name correct";
        return false;
    }
    else{

        error_name.innerHTML="";            
        
    }
    
    if( email.value == "" || email.value.trim() == "" ){

        error_email.innerHTML="This field is required";      
        return false;
        
    }else if( email.value.indexOf("@") == -1 || email.value.indexOf("@") < 3 || email.value.endsWith("@") || email.value.indexOf("@")>email.value.indexOf(".") || email.value.endsWith(".") || email.value.charAt(0) == " "){

        error_email.innerHTML="please Enter Email is Correct ";      
        return false;

    }else{

        error_email.innerHTML="";            
    
    }    

    if( phone.value == "" || phone.value.trim() == "" ){

        error_phone.innerHTML="This field is required";      
        return false;
    
    }else if (phone.value.length < 9 || phone.value.length > 15) {
        
        error_phone.innerHTML = "The phone number must be between 10 and 15 digits.";
        return false;

    }else if (!phone.value.startsWith("+")) {
        
        error_phone.innerHTML = "The number must start with '+'";
        return false;

    }else if(isNaN(phone.value.slice(1))){
        
        error_phone.innerHTML = "Please Enter The Number Only";
        return false;

    }else {
    
        error_phone.innerHTML = "";
    
    }        

    window.location.href = "../../Project Step2/index2.html";
})

