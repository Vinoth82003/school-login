const submitbtn = document.querySelector('.submit')
const errorbox = document.querySelector('.error-msg');
const msg = document.querySelector('.msg');
const clsbtn = document.querySelector('.clsbtn');
var i =0;
var speed =50;
var regerr ='fillout the register number !';
var doberr ='fillout the date of birth number !';
var improp ='incorrect format !';
submitbtn.addEventListener('click',function(){
    var regno = document.getElementById('regno').value;
    var dob = document.getElementById('dobinput').value;
    
    if (regno === '') {
        msg.innerHTML ='';
        errormsg1();
    }else if(dob === ''){
        msg.innerHTML ='';
        errormsg2();
    }else if (regno.length < 13)  {
        msg.innerHTML ='';
        errormsg3();
    }else if (dob.length < 10) {
        msg.innerHTML ='';
        errormsg3();
    }else{
        errorbox.style.scale = 0;
        msg.innerHTML = ''
    }
});

function errormsg1(){
    errorbox.style.scale = 1;
    if (i<regerr.length) {
        msg.innerHTML += regerr.charAt(i);
        i++;
        setTimeout(errormsg1,speed);
    }else{
        i = 0;
    }
}

function errormsg2(){
    errorbox.style.scale = 1;
    if (i<doberr.length) {
        msg.innerHTML += doberr.charAt(i);
        i++;
        setTimeout(errormsg2,speed);
    }else{
        i = 0;
    }
}

function errormsg3(){
    errorbox.style.scale = 1;
    if (i<improp.length) {
        msg.innerHTML += improp.charAt(i);
        i++;
        setTimeout(errormsg3,speed);
    }else{
        i = 0;
    }
}

clsbtn.addEventListener('click',function(){
    errorbox.style.scale = 0;
    msg.innerHTML = '';
});

