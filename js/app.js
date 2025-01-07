
function alterarStatus(index){

    let game = document.getElementById(`game-${index}`);

   let btn = game.querySelector('.dashboard__item__button');
   let img = game.querySelector('.dashboard__item__img');

   
   if(img.classList.contains('dashboard__item__img--rented')){
        let pg = prompt("Confirma a devolução? (S/N)")

         if( pg.toUpperCase() == 'S'){
            btn.textContent = 'Alugar';
            btn.classList.remove('dashboard__item__button--return');
            img.classList.remove('dashboard__item__img--rented');
         }
       

   } else {
    btn.textContent = 'Devolver';
    btn.classList.add('dashboard__item__button--return');
    img.classList.add('dashboard__item__img--rented');
   

   }
   

}