function recipeListResults(results){
  recipe_format = '<h2>'
  let grocery_list = []
  results2 = JSON.parse(results)
  param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  for (x in results2){
    results3 = results2[x]
    buildElement("a", 'recipeName', x+'name')
    document.getElementById(x+'name').innerHTML = results3['Name'] + " " + results3['id'] + "<br>"
    // document.getElementById(x+'name').addEventListener('click', () => {document.location.href = 'recipepager.html?recipe_id='+ results3['id']});
    url = "recipepager.html?recipe_id=" + results3['id']
    document.getElementById(x+'name').setAttribute('onclick', "window.open('"+url+"')")
  };

  document.getElementById('loading').innerHTML = ''
  return 
}

function buildRecipePage(){
  const searchParams = new URLSearchParams(window.location.search);
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  document.dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  
  url = "https://smalldoglegs.fly.dev/recipe_id/" + searchParams.get('recipe_id')
  result = hitAPI(url);
  console.log(result)
  
}
// async function hitAPI(url) {
//   let myObject = await fetch(url);
//   let myjson = await myObject.text();
//   await recipeResults(myjson)
// }


async function hitListAPI(url) {
  let myObject = await fetch(url);
  let myjson = await myObject.text();
  await recipeListResults(myjson)
}

async function buildElement(type, parent, id){
  const par = document.getElementById(parent)
  const cor = document.createElement(type)
  cor.setAttribute('id', id)
  await par.appendChild(cor)
  return 
}

function onRecipeListClick(endpoint){
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  url = "https://smalldoglegs.fly.dev/" + endpoint 
  hitListAPI(url); 
}

function onListResultClick(id){
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  url = "https://smalldoglegs.fly.dev/recipe_id/" + id
  hitAPI(url); 
}
