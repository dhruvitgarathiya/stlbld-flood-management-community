const link = document.getElementById("homiei");
link onclick = homefn;

function homefn(){
    location.href("http://127.0.0.1:5500/project3/index.html#home");
}

const form=document.getElementById("signinform");
form.addEventListener('click', signin);

function signin(event){
    event.preventDefualt(); //prevent the form from submitting the normally
const email =document.getElementById( "email" ).value; 
const name =document.getElementById( "name" ).value;  
const password =document.getElementById( "password" ).value; 
if(email === 'user@gmail.com' &&  password ==='password123'){
    //redirect to another page or show alert
    alert('sign-in successful');
}else {
    //show error messege
alert('invalid email or password');





}

