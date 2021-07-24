/****************************
 * "Seta" os itens de PopUps de tela.
****************************/
function popUpItens(){
    modal = document.getElementById("myPopUp");
    popUpClose = document.getElementsByClassName("close")[0];
    popUpText = document.getElementById("PopUp-Text");
  }
  
/****************************
 * Apresenta o PopUp.
****************************/
function showPopUp(type){
  modal.style.display = "block";

  if(type == "Pericias"){
    popUpText.innerHTML = _SkillPopUpContent;
  }

  if(type == "Vantagens"){
    
    let _AdvantagesPopUpContent = AvaliableAdvantagesList();

    popUpText.innerHTML = _AdvantagesPopUpContent;
  }

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
  