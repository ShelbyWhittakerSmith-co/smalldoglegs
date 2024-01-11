import "./input_fields"

let ingredients = []
let steps = []
let measurements = ['unit','tsp', 'Tbsp', 'cup', 'pint', 'quart', 'gallon', 'g', 'mL', 'oz', 'lbs']
let recipe_name = ''



function load_page() {
  load_dropdown()
  document.getElementById("demo").innerHTML = 'Recipe Name: '+ recipe_name + '<br></br>Ingredients: '+ ingredients +'<br> Steps: '+ steps.join('<br>');
  NewestFunction()
}

function load_dropdown(){
  let value = ''
  for (i in measurements) {

    value += '<option style="color:black" onclick=selected_measurement("'+measurements[i]+'") class="measuretypes">'+measurements[i]+'</option><br>'
  }
  document.getElementById("measure_list").innerHTML = value

}

function field_error(field, error) {
  var element =  document.getElementById(field+'error');
  if (typeof(element) != 'undefined' && element != null)
  {
    let error_field = document.getElementById(field)
    let new_element = document.createElement("p")
    new_element.innerHTML = error
    new_element.style = "color:red; margin:0px;"
    new_element.id = field + 'error'
    error_field.after(new_element)
  }



}
function print_current_recipe(){
  document.getElementById("demo").innerHTML = 'Recipe Name: '+ recipe_name + '<br>Ingredients: '+ ingredients +'<br> Steps: '+ steps.join('<br>');
}
function add_step() {
  let result = document.getElementById('stepname').value;
  if(result !== '') {
    steps.push(result)
    document.getElementById('stepname').value = '';
  } else{
    field_error('addstep', 'The step was not saved as it appears to be blank.')
  }

  print_current_recipe()
}

function add_ingredient() {
  let result = document.getElementById('ingredientname').value;
  let count = document.getElementById('ingredientcount').value;
  let type = document.getElementById('selected_measure').textContent;
  let unit = document.getElementById('unit_type').value;

  if (!parseInt(count) | type === 'Null' | result === ''){
    field_error('addingredient', 'Your Ingredient was not saved as it was lacking information. *Note: Ingredients must be populated. Count must be populated with a number and the measurement type must be selected.')
  } else {
    if (document.getElementById('unit_type').hidden === false){
      ingredients.push([result, count, unit].join(' ')+'<br>')
    } else {
      ingredients.push([result, count, type].join(' ')+'<br>')
    }
    print_current_recipe()
    document.getElementById('ingredientname').value = 'name';
    document.getElementById('ingredientcount').value = 'count';
    unit = document.getElementById('unit_type').value= 'unit';
  }
}

function submitRecipe(){
  recipe_name = document.getElementById('submitrecipe').value
  if (!recipe_name) {
    field_error('recipename', 'The Recipe was not saved as the Name Field was not populated.')
  }

  add_step()
  add_ingredient()
  print_current_recipe()

}

function selected_measurement(measurement){
  document.getElementById('selected_measure').innerHTML = measurement
  if(measurement !== 'unit') {
    document.getElementById('unit_type').hidden = true
  } else
    document.getElementById('unit_type').hidden = false

}




