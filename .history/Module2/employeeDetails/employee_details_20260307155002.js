const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];  

//display employees
const displayEmployees = () => {
  const totalEmployees = employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees
}

const displayEmployeeInHTML = document.getElementById('displayEmployees')
displayEmployeeInHTML.addEventListener('click', displayEmployees)

//calculate total salaries
const calculateTotalSalaries = () => {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

const calculateSalaries = document.getElementById('calculateTotalSalaries')
calculateSalaries.addEventListener('click', calculateTotalSalaries)

//Display HR employees
const displayHREmployees = () => {
    const hrEmployees = employees.filter(employee => employee.department === "HR")
    const hrEmployeesDisplay = hrEmployees.map(employee => `<p>${employee.id}: ${employee.name}:  ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

const hrDisplay = document.getElementById('displayHREmployees')
hrDisplay.addEventListener('click', displayHREmployees)

const findEmployeeById = () => {
    const employeeId = prompt("Enter employee ID: "))
    const foundEmployee = employees.find(employee => employee.id === employeeId)
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`
    } else {
        document.getElementById('employeesDetails').innerText = 'no employee has been found with this ID';
    }
}

const findEmployee = document.getElementById('findEmployeeById');
findEmployee.addEventListener('click', findEmployeeById)