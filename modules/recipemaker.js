function recipeResults(results){
  recipe_format = '<h2>'
  let grocery_list = []
  results2 = JSON.parse(results)
  param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  for (x in results2){
    results3 = results2[x]
    let ingredients = JSON.parse(JSON.parse(results3['Ingredients'])['Ingredients'])
    let recipe_steps = JSON.parse(JSON.parse(results3['Steps'])['Steps'])
    buildElement("h2", 'recipeName', x+'name')
    buildElement("p", 'recipeName', x+'readyin')
    buildElement("p", 'recipeName', x+'ingredients' )
    buildElement('p', 'recipeName', x+'Steps')
    document.getElementById(x+'name').innerHTML = results3['Name']
    document.getElementById(x+'readyin').innerHTML = "Ready In: " + results3['ReadyIn'] + "<br>  Serves: " + results3['Serves']
    document.getElementById(x+'ingredients').innerHTML =ingredients.join('<br>')
    document.getElementById(x+'Steps').innerHTML = recipe_steps.join('<br>')
    grocery_list = grocery_list.concat(ingredients);
  }
  document.getElementById('recipeSteps').innerHTML = 'Grocery List: ' + grocery_list
  document.getElementById('loading').innerHTML = ''
  return 
}


function buildRecipePage(){ //recipepager
  const searchParams = new URLSearchParams(window.location.search);
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  document.dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  
  url = "https://smalldoglegs.fly.dev/recipe/id_search/" + searchParams.get('recipe_id')
  result = hitAPI(url);
  console.log(result)
  
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

function onRecipeClick(endpoint){
  buildElement('div', 'content_box', 'recipeName')
  buildElement('div', 'content_box', 'recipeSteps')
  dom_val = document.getElementById('loading').innerHTML = 'Loading...'
  // hitAPI("https://smalldoglegs.fly.dev/recipe_id/2036")
  url = "https://smalldoglegs.fly.dev/" + endpoint 
  hitAPI(url); 
}
