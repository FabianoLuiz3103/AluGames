
function alterarStatus(index){

    let game = document.getElementById(`game-${index}`);

   let btn = game.querySelector('.dashboard__item__button');
   let img = game.querySelector('.dashboard__item__img');

   if(btn.innerHTML == 'Alugar'){
        btn.innerHTML = 'Devolver';
        btn.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
   } else {
    btn.innerHTML = 'Alugar';
    btn.classList.remove('dashboard__item__button--return');
    img.classList.remove('dashboard__item__img--rented');

   }
   

}