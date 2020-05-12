/*
students score, total possible score

15/20 -> You got a C (75%)!

A 90-100, B 80-89, C 70-79, D 60-69 F 0-59
*/

const gradeCal = function (studentsScore, possibleScore) {
  const perCal = (studentsScore / possibleScore) * 100;
  let letterGrade = "";

  /* Done by me
  if (perCal >= 90 && perCal <= 100) {
    return `You got a A (${perCal} %)..!!!`;
  } else if (perCal >= 80 && perCal <= 89) {
    return `You got a B (${perCal} %)..!!!`;
  } else if (perCal >= 70 && perCal <= 79) {
    return `You got a C (${perCal} %)..!!!`;
  }
  if (perCal >= 60 && perCal <= 69) {
    return `You got a D (${perCal} %)..!!!`;
  } else if (perCal >= 0) {
    return `You got a F (${perCal} %)..!!!`;
  }

  */

  //another efficient way

  if (perCal >= 90) {
    letterGrade = "A";
  } else if (perCal >= 80) {
    letterGrade = "B";
  } else if (perCal >= 70) {
    letterGrade = "C";
  } else if (perCal >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} (${perCal} %)...!!!`;
};

const gradeOne = gradeCal(9, 20);
console.log(gradeOne);

const gradeTwo = gradeCal(89, 150);
console.log(gradeTwo);
