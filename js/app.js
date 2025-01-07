
function alterarStatus(index){

    let game = document.getElementById(`game-${index}`);

   let btn = game.querySelector('.dashboard__item__button');
   let img = game.querySelector('.dashboard__item__img');

   if(img.classList.contains('dashboard__item__img--rented')){
    btn.innerHTML = 'Alugar';
    btn.classList.remove('dashboard__item__button--return');
    img.classList.remove('dashboard__item__img--rented');
   } else {
    btn.innerHTML = 'Devolver';
    btn.classList.add('dashboard__item__button--return');
    img.classList.add('dashboard__item__img--rented');
   

   }
   

}