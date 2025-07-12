interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  // Any other teacher-specific properties
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Factory function to create employee
function createEmployee(salary: number): Teacher | Director {
  if (salary < 500) {
    return {
      firstName: "John",
      lastName: "Doe",
      fullTimeEmployee: true,
      location: "London",
      yearsOfExperience: 1,
    };
  } else {
    return {
      firstName: "Jane",
      lastName: "Smith",
      fullTimeEmployee: true,
      location: "London",
      numberOfReports: 5,
    };
  }
}

// Type predicate to check if employee is Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

// Functions for work
function workDirectorTasks(): string {
  return "Getting to director tasks";
}

function workTeacherTasks(): string {
  return "Getting to work";
}

// Execute work based on employee type
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return workDirectorTasks();
  } else {
    return workTeacherTasks();
  }
}

// Testing output:
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
