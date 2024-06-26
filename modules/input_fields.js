function addIngredient() {
    const ingredientList = document.getElementById('ingredientList');
    const newIngredient = document.createElement('div');
    newIngredient.classList.add('ingredient');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'ingredient';
    input.required = true;
    newIngredient.appendChild(input);
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        removeIngredient(newIngredient);
    };
    newIngredient.appendChild(removeButton);
    ingredientList.appendChild(newIngredient);
}

function addStep() {
    const stepList = document.getElementById('stepList');
    const newStep = document.createElement('div');
    newStep.classList.add('step');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'step';
    input.required = true;
    newStep.appendChild(input);
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        removeStep(newStep);
    };
    newStep.appendChild(removeButton);
    stepList.appendChild(newStep);
}

function removeIngredient(element) {
    // Only allow removal if it's not the initial ingredient
    if (!element.querySelector('input[name="initialIngredient"]')) {
        element.remove();
    }
}

function removeStep(element) {
    // Only allow removal if it's not the initial step
    if (!element.querySelector('input[name="initialStep"]')) {
        element.remove();
    }
}

document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Additional logic to handle form submission (e.g., sending data to server)
});

// Automatically add one ingredient and one step initially
addIngredient();
addStep();
