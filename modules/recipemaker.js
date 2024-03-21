

// async function recipeResults(results){
//   grocery_list = []
//   results2 = JSON.parse(results)
//   param = document.getElementById('recipeName').appendChild(document.createElement('p'))
//   for (x in results2){
//     results3 = results2[x]
//     let ingredients = JSON.parse(JSON.parse(results3['Ingredients'])['Ingredients'])
//     let recipe_steps = JSON.parse(JSON.parse(results3['Steps'])['Steps'])
//     buildElement("p", 'recipeName', x+'name')
//     buildElement("p", 'recipeName', x+'ingredients' )
//     buildElement('p', 'recipeName', x+'Steps')
//     document.getElementById(x+'name').innerHTML = results3['Name']+  "<br>  Ready In: " + results3['ReadyIn'] + "<br>  Serves: " + results3['Serves']
//     document.getElementById(x+'ingredients').innerHTML =ingredients.join('<br>')
//     document.getElementById(x+'Steps').innerHTML = recipe_steps.join('<br>')
//     grocery_list.push(results3['Ingredients']);
//   }
//   document.getElementById('recipeSteps').innerHTML = 'Grocery List: ' + results3['Ingredients']
//   document.getElementById('loading').innerHTML = ''
//   return 
// };


// async function hitAPI(url) {
//   let myObject = await fetch(url);
//   let myjson = await myObject.text();
//   await recipeResults(myjson)
// }


// function onRecipeClick(){
//   buildElement('div', 'content_box', 'recipeName')
//   buildElement('div', 'content_box', 'recipeSteps')
//   dom_val = document.getElementById('loading').innerHTML = 'Loading...'
//   hitAPI("https://smalldoglegs.fly.dev/recipe/3"); 
// }


// async function buildElement(type, parent, id){
//   const par = document.getElementById(parent)
//   const cor = document.createElement(type)
//   cor.setAttribute('id', id)
//   await par.appendChild(cor)
//   return 
// }

// function onRecipeClick(){
//   buildElement('div', 'content_box', 'recipeName')
//   buildElement('div', 'content_box', 'recipeSteps')
//   dom_val = document.getElementById('loading').innerHTML = 'Loading...'
//   hitAPI("https://smalldoglegs.fly.dev/recipe/3"); 
// }


// async function hitAPI2(url) {
//   let myObject = await fetch(url);
//   let myjson = await myObject.text();
//   return myjson
// }

// // }
// async function buildElement(type, parent, id){
//   const par = document.getElementById(parent)
//   const cor = document.createElement(type)
//   cor.setAttribute('id', id)
//   par.appendChild(cor)
//   };

function onlistload(){
  const result = new apiResponse
  result.loadList("https://smalldoglegs.fly.dev/recipe/all")
  

  
};

function buildElement(type, parent, id){
  const par = document.getElementById(parent)
  const cor = document.createElement(type)
  cor.setAttribute('id', id)
  par.appendChild(cor)
  };

class apiResponse{
  constructor(){
    this.type = null
    this.the_list = []
  };



  async loadList(url){
    document.getElementById('loading').innerHTML = 'Loading...'
    const result = (await fetch(url)).json().then(onfulfilled: buildList(result))
    console.log('console one', result)    
    document.getElementById('loading').innerHTML = result
  };
    
  
  
  // async results(results_object){
  //   const myjson = await object.text()
  //   await this.format(type, JSON.parse(myjson))
  // };

  // format(type, results){
  //   buildElement('div', 'content_box', 'recipeName')
  //   buildElement('div', 'content_box', 'recipeSteps')
  //   document.getElementById('loading').innerHTML = 'Loading...'
  //   if (type == 'recipe'){
  //     this.recipeResults(results)
  //   }else if(type == 'list'){
  //     this.listResults(results)
  //     }
  //   };

  // async listResults(results){
  //   const param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  //   for (x in results){
  //     single_recipe = results[x]
  //     buildElement("p", 'recipeName', x+'name')
  //     document.getElementById(x+name).innerHTML = single_recipe['Name']
  //   }
  //   document.getElementById('loading').innerHTML = ''
  // };

  // async recipeResultsobject(results){
  //   document.getElementById('loading').innerHTML = results
  //   param = document.getElementById('recipeName').appendChild(document.createElement('p'))
  //   for (x in results2){
  //     results3 = results2[x]
  //     let ingredients = JSON.parse(JSON.parse(results3['Ingredients'])['Ingredients'])
  //     let recipe_steps = JSON.parse(JSON.parse(results3['Steps'])['Steps'])
  //     buildElement("p", 'recipeName', x+'name')
  //     buildElement("p", 'recipeName', x+'ingredients' )
  //     buildElement('p', 'recipeName', x+'Steps')
  //     document.getElementById(x+'name').innerHTML = results3['Name']+  "<br>  Ready In: " + results3['ReadyIn'] + "<br>  Serves: " + results3['Serves']
  //     document.getElementById(x+'ingredients').innerHTML =ingredients.join('<br>')
  //     document.getElementById(x+'Steps').innerHTML = recipe_steps.join('<br>')
  //     grocery_list.push(results3['Ingredients']);
  //   }
  //   document.getElementById('recipeSteps').innerHTML = 'Grocery List: ' + results3['Ingredients']
  //   document.getElementById('loading').innerHTML = ''
  //   return 
  // };

  async buildElement(type, parent, id){
    const par = document.getElementById(parent)
    const cor = document.createElement(type)
    cor.setAttribute('id', id)
    par.appendChild(cor)
    };
};