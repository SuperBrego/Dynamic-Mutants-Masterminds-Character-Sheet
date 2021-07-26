
/*********************************************************
** Ao fazer Hover, mostrar a descrição do item.
* https://stackoverflow.com/questions/15702867/html-tooltip-position-relative-to-mouse-pointer 
* ^ Estudar
*********************************************************/
function displayDescription(item, section){
  let campoDeDescricoes = document.getElementById(section);
  // campoDeDescricoes.innerHTML = foundItem;
  // campoDeDescricoes.style.visibility = "visible";

}

/*********************************************************
 * Remove a descrição assim que tira o mouse
*********************************************************/
function hideDescription(section){
  let campoDeDescricoes = document.getElementById(section);
  //campoDeDescricoes.style.visibility = "hidden";
}

/*********************************************************
 * Mostra a descrição das Vantagens
*********************************************************/
function ShowDescription(entryID, type){
  let content;

  switch(type){
    case 3: break;
    // Vantagens
    case 4:
      content = _AllAdvantagesList.find( element => element.id == entryID ).description;
      break;
    // Complicações
    case 8: 
      content = _DefaultComplicationList.find( element => element.id == entryID ).description;
      break;
    default: return;
  }
  
  $("#BiLateralListItem2").html(content);
}
