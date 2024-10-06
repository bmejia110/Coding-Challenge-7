//Task 1: Create a Department Structure

const company = {
    departments: [
    {
        departmentName: "Sales",
        employees: [
            {
                name: "myles",
                salary: 65000,
                subordinates: [
                    {
                        name:"tyler",
                        salary: 56000,
                        subordinates: [
                            {
                                name: "nikki",
                                salary: 48000,
                                subordinates: []
                            },
                            {
                                name: "david",
                                salary: 45000,
                                subordinates:[]
                            }
                        ]
                    },
                    {
                        name:  "bri",
                        salary:80000,
                        subordinates: []
                    }
                ]
            }
        ]
    },
    {
        departmentName: "HR",
        employees: [
            {
                name: "lorenzo",
                salary: 76000,
                subordinates: [
                    { 
                        name: "chaemin",
                        salary: 65000,
                        subordinates: []
                    },
                    {
                        name: "kristian",
                        salary: 63000,
                        subordinates: []
                    }
                ]
            }
        ]
    }
]

                            
                            

            
};

//Task 2: Create a Recursive Function to Calculate Total Salary for a Department 

function calculateEmployeeSalary(department) {
    let totalSalary = 0;
    for(let i = 0; i < department.employees.length; i++) { . // iterate over each employee in loop
        let employee = department.employees[i];
        totalSalary += employee.salary;  // adding employee salary to total
        if (employee.subordinates && employee.subordinates.length > 0) {   // if employee has subordinates we add there salaries to total
            totalSalary += calculateEmployeeSubordinatesSalary(employee.subordinates);
        }
    }

  return totalSalary;  
}

//Task 3: Create  aFunction to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalCompanySalary = 0;
    company.departments.forEach(department => {  // iterate over each deparment in the company using foreach
        totalCompanySalary += calculateDeparmentSalary(department);
    });
    return totalCompanySalary;
}