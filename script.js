const passwordBox = document.getElementById("password");
const lenght = 12;

const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"

const allChars = uperCase + lowerCase + number;

function createPassword(){
    let password = "";
    password += uperCase[Math.floor(Math.random()* uperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];

    while (lenght > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
