function recipeResults(results){
  recipe_format = '<h2>'
  grocery_list = []
  results2 = JSON.parse(results)
  param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  for (x in results2){
    results3 = results2[x]
    let ingredients = JSON.parse(JSON.parse(results3['Ingredients'])['Ingredients'])
    let recipe_steps = JSON.parse(JSON.parse(results3['Steps'])['Steps'])
    buildElement("p", 'recipeName', x+'name')
    buildElement("p", 'recipeName', x+'ingredients' )
    buildElement('p', 'recipeName', x+'Steps')
    document.getElementById(x+'name').innerHTML = results3['Name']+  "<br>  Ready In: " + results3['ReadyIn'] + "<br>  Serves: " + results3['Serves']
    document.getElementById(x+'ingredients').innerHTML =ingredients.join('<br>')
    document.getElementById(x+'Steps').innerHTML = recipe_steps.join('<br>')
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
  // hitAPI("https://smalldoglegs.fly.dev/recipe_id/2036")
  hitAPI("https://smalldoglegs.fly.dev/recipe/3"); 
}
