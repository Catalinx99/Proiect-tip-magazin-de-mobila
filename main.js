const myForm = document.querySelector("div .formular");
const nameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');
const submit = document.querySelector('#submit');
const msg2 = document.querySelector('.msg2');
const feedback = document.querySelector('.feedback');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();


    // alert('aloo');

    if(nameInput.value === '' || passwordInput.value === ''){
        // alert('Alo');
        msg.textContent='Enter your name and password';
            setTimeout(() => msg.remove(), 3000);
      
    }else 
        msg2.textContent='Succes ';
            setTimeout(() => msg2.remove(), 3000);
}



function mouseOver() {
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "green";
  }
  
  function mouseOut() {
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "grey";
  }