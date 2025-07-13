// 1. String literal type
type Subjects = 'Math' | 'History';

// 2. Function using the type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// 3. Test
console.log(teachClass('Math'));
console.log(teachClass('History'));
