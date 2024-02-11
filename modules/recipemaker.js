function recipeResults(results){
  recipe_format = '<h2>'
  grocery_list = []
  results2 = JSON.parse(results)
  param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  for (x in results2){
    results3 = results2[x]

    buildElement("p", 'recipeName', x+'name')
    document.getElementById(x+'name').innerHTML =  results3['Name']+  "  Ready In: " + results3['ReadyIn'] + "  Serves: " + results3['Serves'] +
    buildElement("p", 'recipeName', x+'ingredients' )
    document.getElementById(x+'ingredients').innerHTML = results3['Ingredients']
    buildElement('p', 'recipeName', x+'Steps')
    document.getElementById(x+'Steps').innerHTML = results3['Steps']
    grocery_list.push(results3['Ingredients']);
  }
  document.getElementById('recipeSteps').innerHTML = 'Grocery List: ' + results3['Ingredients']
  document.getElementById('loading').innerHTML = ''
  return 
}


async function hitAPI(url) {
  let myObject = await fetch(url);
  let myjson = await myObject.text();
  await recipeResults(myjson)
}

async function buildElement(type, parent, id){
  const par = document.getElementById(parent)
  const cor = document.createElement(type)
  cor.setAttribute('id', id)
  await par.appendChild(cor)
  return 
}

function onRecipeClick(){
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  hitAPI("https://smalldoglegs.fly.dev/recipe/3"); 
}
