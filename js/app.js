
function alterarStatus(index){

    let gameId = `game-${index}`;
    let game = document.getElementById(gameId.toString());

   let btn = game.getElementsByTagName('a');
   let img = game.getElementsByTagName('div');

   if(btn[0].innerHTML == 'Alugar'){
        btn[0].innerHTML = 'Devolver';
        btn[0].classList.add('dashboard__item__button--return');
        img[0].classList.add('dashboard__item__img--rented');
   } else {
    btn[0].innerHTML = 'Alugar';
    btn[0].classList.remove('dashboard__item__button--return');
    img[0].classList.remove('dashboard__item__img--rented');

   }
   

}