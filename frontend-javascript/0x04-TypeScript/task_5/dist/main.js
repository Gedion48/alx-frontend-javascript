"use strict";
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}
// Example usage (optional, can be removed before submission)
const major1 = { credits: 3, brand: 'MajorCredits' };
const major2 = { credits: 4, brand: 'MajorCredits' };
console.log('Sum of Major Credits:', sumMajorCredits(major1, major2));
const minor1 = { credits: 2, brand: 'MinorCredits' };
const minor2 = { credits: 1, brand: 'MinorCredits' };
console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2));
