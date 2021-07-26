// usar listeners em vez de onClicks https://www.w3schools.com/js/js_htmldom_eventlistener.asp


/******************
 * Popup itens
******************/
let modal;
let popUpClose;
let popUpText;

/* **************************************************************************************** */

$(document).ready(function() {

  $("#defaultOpen").click();
  
  popUpItens();
  RenderBaseSkillList();

  AppendFunctionsPersonalTraits();
  RenderPersonalTraits();

  UpdateTraits();
});


/*
** Atualiza as características em cada item da ficha.
*/
function UpdateTraits() {
  UpdateSpent();
  UpdateDefenses();
  UpdateSkills();
  UpdateAdvantages();
  UpdateOtherTraits();
}

/*********************************************************
 * Abre página inicial que tenha a ID.
*********************************************************/

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  var sections = document.getElementsByClassName("SectionTitle");
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
function UpdateSpent(){
  UpdateAbilitiesSpent();
  UpdateDefensesSpent();
  UpdateSkillsSpent();
  UpdateAdvantagesSpent();

  UpdateTotalSpent();
}

/********************************
* Atualiza o total de pontos.
********************************/
function UpdateTotalSpent(){
  var sum = 0.0;
  for(var i = 0; i < spentPoints.length; i++){
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
  var _newRank = parseInt(rank);
  return _newRank;

}