/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Factory function to create employee
function createEmployee(salary) {
    if (salary < 500) {
        return {
            firstName: "John",
            lastName: "Doe",
            fullTimeEmployee: true,
            location: "London",
            yearsOfExperience: 1,
        };
    }
    else {
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
function isDirector(employee) {
    return employee.numberOfReports !== undefined;
}
// Functions for work
function workDirectorTasks() {
    return "Getting to director tasks";
}
function workTeacherTasks() {
    return "Getting to work";
}
// Execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return workDirectorTasks();
    }
    else {
        return workTeacherTasks();
    }
}
// Testing output:
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

/******/ })()
;
//# sourceMappingURL=bundle.js.map