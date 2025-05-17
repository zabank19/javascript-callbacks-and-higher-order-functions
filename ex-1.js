// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for(let item of array){
    operation(item);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,(salary) => newEmployeeSalaries.push(salary + 5000));

// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
