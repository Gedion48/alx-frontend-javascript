"use strict";
/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
