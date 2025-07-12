interface Director {
  workDirectorTasks: () => void;
}

interface Teacher {
  workTeacherTasks: () => void;
}

type Employee = Director | Teacher;

function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks();
  }
}

// Example createEmployee function (you should adjust it per your task instructions)
function createEmployee(salary: number): Employee {
  if (salary > 500) {
    return {
      workDirectorTasks: () => console.log('Getting to director tasks'),
    };
  }
  return {
    workTeacherTasks: () => console.log('Getting to work'),
  };
}

// Testing:
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
