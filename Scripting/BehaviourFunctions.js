
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
function showAdvDesc(entryID){
  let campoDeDescricoes = document.getElementById("advantagesPopUpGridItem2");
  let content = _AllAdvantagesList.find( element => element.id == entryID ).description;
  campoDeDescricoes.innerHTML = content;
}