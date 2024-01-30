const lmail = document.getElementById('mail');
const lpass = document.getElementById('pass');
document.getElementById('myForm').addEventListener('submit', login)
function login(e){
    e.preventDefault();
    let values = JSON.parse(localStorage.getItem("formData"))
    console.log(values)
    if((lmail.value == values.mail)&&(lpass.value == values.pass)){
        window.location.href = "https://gitmohitco.github.io/formshow/";
    }
    else{
        alert("Wrong email or password");
    }
}
document.getElementById('eye').addEventListener('click',function(){
    if(lpass.type == "password"){
        lpass.type = "text";
        document.getElementById('eye').textContent = '😵';
    }
    else{
        lpass.type = "password";
        document.getElementById('eye').textContent = "🤨"
    }
})
