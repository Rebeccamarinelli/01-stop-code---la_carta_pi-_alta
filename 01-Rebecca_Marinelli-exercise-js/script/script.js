


const btn = document.getElementById('play-button');
const card1 = document.getElementById('you');
const card2 = document.getElementById('cpu');
const cardNumber1 = document.querySelector('#you span');
const cardNumber2 = document.querySelector('#cpu span');
const message = document.getElementById('message');


btn.addEventListener('click', function(){
    const numero1 = Math.floor(Math.random() * 10 + 1);
    const numero2 = Math.floor(Math.random() * 10 + 1); 
    cardNumber1.innerHTML = numero1;
    cardNumber2.innerHTML = numero2;
    cardNumber1.classList.add('visible');
    cardNumber2.classList.add('visible');
    card1.style.backgroundColor = "white";
    card2.style.backgroundColor = "white";
      
    if(numero1>numero2){
        message.innerHTML = "Hai vinto!";
        message.classList.add('yellow');

     }else if(numero1 == numero2){
         message.innerHTML = "Siete pari!"
         message.classList.remove('yellow');
     }
    else{
        message.innerHTML = "Hai perso!"
        message.classList.remove('yellow');
     }
    
})

        
