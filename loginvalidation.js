function validateData(){
    var uname = document.getElementById("uname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var pw = document.getElementById("pw");
    var pwc = document.getElementById("pw1");
    var male = document.getElementById("gender-1");
    var fem = document.getElementById("gender-2");
    var oth = document.getElementById("gender-3");
    var term = document.getElementById("terms");

    if(uname.value.length < 5){
        alert("Invalid username! Username must be at least 5 characters long.");
    }
    else if(!email.value.endsWith("@gmail.com") && !email.value.endsWith("@icloud.com")){
        alert("Email must ends with @gmail.com or @icloud.com");
    }
    else if(isNaN(phone.value)){
        alert("Phone number must be in numbers!");
    }
    else if(!checkAlphanum(pw.value)){
        alert("Password must be alphanumeric!");
    }
    else if(pwc.value != pw.value){
        alert("Password is not the same!");
    }
    else if(!male.checked && !fem.checked && !oth.checked){
        alert("Gender must be selected!");
    }
    else if(!term.checked){
        alert("Please agree to our terms and conditions!");
    }
    else{
        localStorage.setItem("name", uname.value);
        window.location.href = "../html/homepage.html"
    }
    
    function checkAlphanum(pw){
        var isAlpha = false;
        var isNum = false;
        
        for(let i=0; i<pw.length; i++){
            if(isNaN(pw[i])){
                isAlpha = true;
            }
            else{
                isNum = true;
            }
            if(isAlpha && isNum){
                return true;
            }
        }
    }
}

function validateMore(){
    var uname = document.getElementById("uname");
    var pw = document.getElementById("pw");

    if(uname.value.length < 5){
        alert("Invalid username! Username must be at least 5 characters long.");
    }
    else if(!checkAlphanum(pw.value)){
        alert("Password must be alphanumeric!");
    }
    else{
        localStorage.setItem("name", uname.value);
        window.location.href = "../html/homepage.html"
    }

    function checkAlphanum(pw){
        var isAlpha = false;
        var isNum = false;
        
        for(let i=0; i<pw.length; i++){
            if(isNaN(pw[i])){
                isAlpha = true;
            }
            else{
                isNum = true;
            }
            if(isAlpha && isNum){
                return true;
            }
        }
    }
}