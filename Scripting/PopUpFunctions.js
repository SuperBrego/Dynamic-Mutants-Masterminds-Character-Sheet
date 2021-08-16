/****************************
 * "Seta" os itens de PopUps de tela.
****************************/
function SetPopUp(){
    modal = document.getElementById("myPopUp");
    popUpClose = document.getElementsByClassName("close")[0];
    popUpText = document.getElementById("PopUp-Text");
  }
  
/****************************
 * Apresenta o PopUp.
****************************/
function showPopUp(){
  let type = arguments[0];
  let effectID = arguments[1];
  let powerID = arguments[2];

  modal.style.display = "block";

  /********************
  ** Nomenclatura: 
  ** 1 - Habilidades
  ** 2 - Defesas
  ** 3 - Perícias
  ** 4 - Vantagens
  ** 5 - Poderes
  ** 6 - Equipamentos
  ** 8 - Complicações
  ********************/
  let _PopUpContext;

  switch(type){
    // Perícias
    case 3:
      $(popUpText).html(_SkillPopUpContent);
      break;
    // Vantagens
    case 4: 
      _PopUpContext = AvaliableAdvantagesList();
      break;
    // Poderes
    case 5: 
      _PopUpContext = AvaliableEffectList();
      break;
    // Equipamentos
    case 6: break;
    // Complicações
    case 8: 
      _PopUpContext = ComplicationsList();
      break;
    // Modificadores
    case 9: 
      _PopUpContext = ModifiersList(effectID, powerID);
      break;
    // Opções de Poder
    case 10: 
      _PopUpContext = PowerOptionsList(powerID);
      break;
    default: closePopUp();
  }

  $(popUpText).html(_PopUpContext);
    
}

  
/****************************
  * Fecha o PopUp 
*****************************/
function closePopUp() {
    modal.style.display = "none";
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
  