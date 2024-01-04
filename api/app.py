import json
from flask import Flask, jsonify, request
import pymysql.cursors


app = Flask(__name__)

recipes = [
 { 'id': 1, 'name': 'Shelby' },
 { 'id': 2, 'name': 'Eric' },
 { 'id': 3, 'name': 'Clementine' }
]



@app.route("/list_recipes", methods=['GET'])
def list_recipes_endpoint():
  return jsonify(get_recipes())

@app.route('/recipes', methods=['GET'])
def get_recipes():
  #This sends the dictionary
 return jsonify(recipes)

@app.route('/recipes/<int:id>', methods=['GET'])
def get_recipe_by_id(id: int):
 recipe = get_recipe(id)
 if recipe is None:
   return jsonify({ 'error': 'Recipe does not exist'}), 404
 return jsonify(recipe)

def get_recipe(id):
 return next((e for e in recipes if e['id'] == id), None)


def get_data(command):
  connection = pymysql.connect(host='localhost',
                             user='shelbith_super_user',
                             password='Louise2016Clem',
                             database='shelbith_main',
                             port=3306,
                             cursorclass=pymysql.cursors.DictCursor)
  with connection:
      with connection.cursor() as cursor:
          cursor.execute(command)
          result = cursor.fetchall()
          return result

def get_recipes():
  command = "SELECT * FROM Recipes;"
  result = get_data(command);
  return result
# def employee_is_valid(employee):
#   '''checks if the key has a name'''
#  for key in employee.keys():
#    if key != 'name':
#     return False
#  return True

# @app.route('/employees', methods=['POST'])
# def create_employee():
#  global nextEmployeeId
#  employee = json.loads(request.data)
#  if not employee_is_valid(employee):
#    return jsonify({ 'error': 'Invalid employee properties.' }), 400

 # employee['id'] = nextEmployeeId
 # nextEmployeeId += 1
 # employees.append(employee)

 # return '', 201, { 'location': f'/employees/{employee["id"]}' }

# @app.route('/employees/<int:id>', methods=['PUT'])
# def update_employee(id: int):
#  employee = get_employee(id)
#  if employee is None:
#    return jsonify({ 'error': 'Employee does not exist.' }), 404

 # updated_employee = json.loads(request.data)
 # if not employee_is_valid(updated_employee):
 #   return jsonify({ 'error': 'Invalid employee properties.' }), 400

 # employee.update(updated_employee)

 # return jsonify(employee)

# @app.route('/employees/<int:id>', methods=['DELETE'])
# def delete_employee(id: int):
#  global employees
#  employee = get_employee(id)
#  if employee is None:
#    return jsonify({ 'error': 'Employee does not exist.' }), 404

 # employees = [e for e in employees if e['id'] != id]
 # return jsonify(employee), 200

if __name__ == '__main__':
   app.run(port=5000)