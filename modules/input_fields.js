const myIngredients = [];
const mySteps = [];

function displayIngredients(items) {
    const listElement = document.getElementById('ingredientList');
    const errorElement = document.getElementById('ingredientError');
    listElement.innerHTML = '';
    errorElement.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            items.splice(index, 1);
            displayIngredients(items);
        };

        listItem.appendChild(document.createTextNode(' ')); // Add space before button
        listItem.appendChild(removeButton);
        listElement.appendChild(listItem);
    });
}

function displaySteps(items) {
    const listElement = document.getElementById('stepList');
    const errorElement = document.getElementById('stepError');
    listElement.innerHTML = '';
    errorElement.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            items.splice(index, 1);
            displaySteps(items);
        };

        listItem.appendChild(document.createTextNode(' ')); // Add space before button
        listItem.appendChild(removeButton);
        listElement.appendChild(listItem);
    });
}

function IngredientFunction() {
    const ingredientInput = document.getElementById('ingredientinput').value;
    if (ingredientInput) {
        myIngredients.push(ingredientInput);
        displayIngredients(myIngredients);
        document.getElementById('ingredientinput').value = '';
    }
    return false; // Prevent form submission
}

function StepFunction() {
    const stepInput = document.getElementById('stepinput').value;
    if (stepInput) {
        mySteps.push(stepInput);
        displaySteps(mySteps);
        document.getElementById('stepinput').value = '';
    }
    return false; // Prevent form submission
}

function SubmitFunction() {
    const rname = document.getElementById('rname').value
    const rservings = document.getElementById('rservings').value
    const rtime = document.getElementById('rtime').value
    if (rname.length === 0){
        alert('The Recipe Name must be populated.');
        return false;
    }
    if (myIngredients.length === 0) {
        alert('Ingredients must be submitted');
        return false; // Prevent form submission
    }
    if (mySteps.length === 0) {
        alert('Steps must be submitted.');
        return false; // Prevent form submission
    }
    message = ('Are you sure you are done?'+
    '\nRecipe Name: ' + rname +
    '\nServings:'+ rservings +
    '\nTime: '+ rtime +
    '\nIngredients: '+ myIngredients +
    '\nSteps: '+ mySteps)
    if (confirm(message)){
        anotherFunction();
        return true;
    }
        return false;
}
function anotherFunction() {
    const url = 'http://127.0.0.1:5000/'; // Replace with your actual Flask server URL

    const formData = new FormData();
    formData.append('name', rname);
    formData.append('readyin', rtime);
    formData.append('servings', rservings);
    formData.append('steps', mySteps);
    formData.append('ingredients', myIngredients);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Recipe added:', data);
        // Handle the response data as needed
    })
    .catch(error => console.error('Error adding recipe:', error));
}