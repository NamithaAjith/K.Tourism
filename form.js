let name = document.getElementById("name");
let psd = document.getElementById("psd");

function formvalidation1(){
    let name = /^([a-z]+)$/
    let password = /^([A-Za-z0-9\@._-]+)$/
    
    if (test(name.value).trim() == ""){
        alert("this field cannot be empty");
        name.style.border = "2px solid red";
        return"false";
    } 
    else if (password.test(psd.value).length<=8.trim()==""){
        alert("password cannot be empty")
        psd.style.border = "2px solid red";
        return"false";
    } 
    else {
        alert("Looks good!")
        return"true";
    }
}

let name1 = document.getElementById("firstname");
let name2 = document.getElementById("lastname");
let usrnam = document.getElementById("User-name");
let city = document.getElementById("city-name");
let state = document.getElementById("state-name");
let zip = document.getElementById("zip code");
let email = document.getElementById("InputEmail");
let pwd = document.getElementById("InputPassword");

function formvalidation2(){
    let usrname = /^([a-z]+)$/
    let emailid = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-_]+).([A-Za-z{2,3}])(.A-Za-z{2,3})?$/
    let password = /^([A-Za-z0-9\@._-]+)$/

    if(usrname.test(usrnam.value).trim()==""){
        alert("Please choose a username");
        usrnam.style.border = "2px solid red";
        return"false";
    }
    else if(emailid.text(email.value).trim()==""){
        alert("plase provide a valid email id")
        email.style.border = "2px solid red";
        return"false";
    }
    else if(password.test(pwd.value).trim()==""){
        alert("please provide a password")
        psd.style.border= "2px solid red";
        return"false";
    }
    else{
        alert("Looks good!");
        return"true";
    }
}

