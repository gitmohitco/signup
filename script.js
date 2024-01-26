document.getElementById('myForm').addEventListener('submit',function(e){
    const name = document.getElementById("name");
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    if(name.value.trim() === ""){
        document.getElementById("para").textContent = "*Name must not be empty!";
    }
    else if(name.value.length >= 20){
        document.getElementById("para").textContent = "*Name should be less than 20 characters";
    }
        //checking for valid email id
        //var regx = /^([a-zA-Z0-9_\-\.]+)
    else if(mail.trim() === "" || !mail.includes('@')){
        document.getElementById("mailPara").textContent= "*Enter a valid email";
    }
    else if(pass.length >= 9){
        document.getElementById("passPara").textContent = "*Password length should not be greater then 8 characters"
    }
    else if(pass.length < 4){
        document.getElementById("passPara").textContent = "*Password length should be atlest 4 characters"
    }
    else if(!(pass === cpass)){
        document.getElementById("cpassPara").textContent = "*Passwords do not match!"
    }
    else{
        document.querySelector(".log").textContent=`Successfully Registred '${name.value}'`;
    }
    e.preventDefault();
})
document.getElementById('myForm').addEventListener('clear',function(e){
    const name = document.getElementById("name");
    name.value="";
    const mail = document.getElementById("mail");
    mail.value="";
    const pass = document.getElementById("pass");
    pass.value='';
    const cpass = document.getElementById("cpass");
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
    e.preventDefault();
})
