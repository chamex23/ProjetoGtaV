
const botao = document.querySelector('.btn-plataforma');

const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

botao.addEventListener('click', () => {
  
  elementoPlataformas.classList.toggle('active')

   /* const botaoAberto = elementoPlataformas.classList.contains('active')

   if(botaoAberto){
    
    elementoPlataformas.classList.remove('active')

   } else{
    elementoPlataformas.classList.add('active')
   }*/

 

});

