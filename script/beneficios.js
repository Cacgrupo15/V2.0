// funcion par obtener el mes previo
const getMonthPrev = () => {
  const opciones = { month: "long" };
  let mesActual = new Date();
  mesActual.setMonth(mesActual.getMonth() - 1);
  let mesPrev = mesActual.toLocaleDateString("es-ES", opciones);
  // se convierte la primera letra en mayuscula
  mesPrev = mesPrev.charAt(0).toUpperCase() + mesPrev.slice(1);
  return mesPrev;
};
//funcion para establecer los premios
const setAward = (posicion, winner) => {
  // dependiendo de la posicion establezco el puesto
  switch (posicion) {
    case 0:
      winner.premio = "Visita a bodega Zuccardi";
      break;
    case 1:
      winner.premio = "1 vino bodega Zuccardi";
      break;
    case 2:
      winner.premio = "Vaucher de descuento";
      break;
    default:
      winner.premio = null;
      break;
  }
};
// funcion para mostrar los elementos en el DOM de cada ganador
const renderWiner = (position, winner) => {
  const { name, picture, premio } = winner;
  return `<div class="cardWinner">
  
                    <div class="cardWinner">
                        <p> ${position} °:</p> 
                        <p>${premio}</p> 
                        <img src="${picture.medium}" alt="imagen de ${name.first} ${name.last}" >
                        <p>${name.first} ${name.last}</p>
                    </div>
            </div>`;
};
// funcion a ejecutar cuando se cargue el documento para mostrar los ganadores
const setWinners = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?nat=mx,br&&results=3&&inc=name,picture&noinfo"
  );
  const { results } = await response.json();
  // obtenemos donde va a ir el titulo se va a ir actualizando mes a mes con la funcion getMonthPrev
  const tittleWinner = document.getElementById("tittleCardsWinner");
  let mes = getMonthPrev();
  tittleWinner.innerHTML = `<h2 class="cardWinners__tittle" id="tittleCardsWinner">Ganadores de ${mes}</h2>`;
  // obtengo el div donde se va a mostrar a los ganadores
  const divWinner = document.getElementById("cardWinners");
  results.forEach((element, index) => {
    setAward(index, element);
    // guardo la card de cada elemento en la variable
    const cardWinner = renderWiner(index + 1, element);
    divWinner.innerHTML += cardWinner;
  });
};
document.addEventListener("DOMContentLoaded", function () {
  setWinners();
});
