const lowercas = "abcdefghijklmnopqrstuvwxyz";
const upercas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = `!@#$%^&*()-_=+[{]};:'",<.>/?|~`;

const checkboxsmall = document.getElementById("smallLatter");
const checkboxcapital = document.getElementById("capitalLatter");
const checkboxnumber = document.getElementById("number");
const checkboxsymbol = document.getElementById("symbol");
const wer = document.getElementById("wer");
const passlng = document.getElementById("leng");
const passcnt = document.getElementById("password-count");

document.getElementById("generate-btn").addEventListener("click", generatePass);

function generatePass() {
    let passlen = Number(passlng.value);
    let passcount = Number(passcnt.value);
    let allChar = "";
    wer.innerHTML = "";

    if (checkboxsmall.checked) {
        allChar += lowercas;
    }
    if (checkboxcapital.checked) {
        allChar += upercas;
    }
    if (checkboxnumber.checked) {
        allChar += number;
    }
    if (checkboxsymbol.checked) {
        allChar += symbol;
    }
    if (!checkboxsmall.checked && !checkboxcapital.checked && !checkboxnumber.checked && !checkboxsymbol.checked) {
        wer.innerHTML = "Please select at least one type";
        return;
    }

    for (let j = 0; j < passcount; j++) {
        let pass = "";
        for (let i = 0; i < passlen; i++) {
            let randomindex = Math.floor(Math.random() * allChar.length);
            pass += allChar[randomindex];
        }
        wer.innerHTML +=`${1+j}. ${pass} <br/><br/>`;
    }
}
