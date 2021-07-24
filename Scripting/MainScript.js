// usar listeners em vez de onClicks https://www.w3schools.com/js/js_htmldom_eventlistener.asp

/******************
 * Popup itens
******************/
let modal;
let popUpClose;
let popUpText;

/* **************************************************************************************** */

window.onload = function() {
  // Get the element with id="defaultOpen" and click on it
  $("#defaultOpen").click();
  
  popUpItens();

  updateTraits();

};

/*
** Atualiza as características em cada item da ficha.
*/
function updateTraits() {
  updateSpent();
  updateDefenses();
  updateSkills();
  updateAdvantages();
  updateOtherTraits();
}

/*********************************************************
 * Abre página inicial que tenha a ID.
*********************************************************/

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  let sections = document.getElementsByClassName("SectionTitle");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = color;
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

/*********************************************************
 * Atualiza o gasto.
*********************************************************/
function updateSpent(){
  updateAbilitiesSpent();
  updateDefensesSpent();
  updateSkillsSpent();
  updateAdvantagesSpent();

  updateTotalSpent();
}

/*********************************************************
 * Atualiza o que foi gasto por cada seção.
*********************************************************/
function updateSpent(section) {
  
  switch (section) {
    case 1: updateAbilitiesSpent(); break;
    case 2: updateDefensesSpent(); break;
    case 3: updateSkillsSpent(); break;
    case 4: updateAdvantagesSpent(); break;
    default: return;
  }

  updateTotalSpent();

}

/********************************
* Atualiza o total de pontos.
********************************/

function updateTotalSpent(){
  let sum = 0.0;
  for(let i = 0; i < spentPoints.length; i++){
    sum += parseFloat(spentPoints[i][1]);
  }

  // Update Sections
  document.getElementById("totalSpentPoints").innerHTML = "" + sum;
}


/**
 * 
*/
function RankValidation(rank, isAbility){
  
  /* Se não for uma Habilidade, tem que voltar 0 caso fique vazio
  * Se não, retorna -5.
  */
  if(rank == "" && !isAbility) return 0;
  else if (rank == "" && isAbility) return -5;

  // Garanto um INT e retorno.
  let _newRank = parseInt(rank);
  return _newRank;

}