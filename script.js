const regForm = document.getElementById("myForm");
regForm.addEventListener('submit',regCall);
const name = document.getElementById("name");
const mail = document.getElementById("mail")
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
let mvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let pvalid = /^[A-Za-z]\w{7,14}$/;
function valid(){
    if(name.value.trim() === ''){
        document.getElementById("para").textContent = "*Name must not be empty!";
    }
    else if(name.value.length > 20){
        document.getElementById("para").textContent = "*Name is too long!";
    }
    else{
        document.getElementById("para").textContent = "";
    }
    if(!mail.value.match(mvalid)){
        document.getElementById("mailPara").textContent= "*Enter a valid email";
    }
    else if(pass.length >= 8){
        document.getElementById("passPara").textContent = "*Password length should not be greater then 8 characters"
    }
    else if(!pass.value.length >= 8 ){
        document.getElementById("cpassPara").textContent="*Password length should be atleast 8 characters!"
    }
    else{
        document.getElementById("passPara").textContent= "";
    }
    if(cpass.value !== pass.value){
        document.getElementById("cpassPara").textContent = "*Passwords does not match!"
    }
    else{
        document.getElementById("cpassPara").textContent = "";
    }
}

function regCall(event){
    console.log(event);
    event.preventDefault();
    valid();
    let formData = {name: name.value, mail: mail.value, pass: pass.value, cpass: cpass.value}
    localStorage.setItem("formData",JSON.stringify(formData));
    clearItems();
}

document.getElementById('eye').addEventListener('click',function(){
    if(pass.type == "password"){
        pass.type = "text";
        document.getElementById('eye').textContent = '😵';
    }
    else{
        pass.type = "password";
        document.getElementById('eye').textContent = "🤨"
    }
})
document.getElementById('eyee').addEventListener('click',function(){
    if(cpass.type == "password"){
        cpass.type = "text";
        document.getElementById('eyee').textContent = '😵';
    }
    else{
        cpass.type = "password";
        document.getElementById('eyee').textContent = "🤨"
    }
})

function clearItems(){
    name.value = ''
    mail.value = ''
    pass.value = ''
    cpass.value = ''
}

document.getElementById('myForm').addEventListener('clear',function(e){
    e.preventDefault();
    name.value="";
    mail.value="";
    pass.value='';
    cpass.value='';
    const para = document.getElementById("para");
    para.textContent="";
    const mailPara = document.getElementById("mailPara");
    mailPara.textContent="";
    const passPara = document.getElementById("passPara");
    passPara.textContent = "";
    const cpassPara = document.getElementById("cpassPara");
    cpassPara.textContent="";
    const log = document.querySelector(".log");
    log.textContent="";
})
