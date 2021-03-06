const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//iterate through employees

for (let i = 0; i < employees.length; i++) {
  const employeeData = employees[i];

  //call to my function and pass data
  const result = ProcessEmployeeBonus(employeeData);
  // TODO - log out results
  console.log(result);
}

function ProcessEmployeeBonus(employee) {
  //something happens here
  let bonusPct = 0;

  if (employee.reviewRating === 3) {
    bonusPct = 4;
  } else if (employee.reviewRating === 4) {
    bonusPct = 6;
  } else if (employee.reviewRating === 5) {
    bonusPct = 10;
  } else if (employee.reviewRating <= 2) {
    bonusPct = 0;
  }

  //adjust based on employee number
  //4 digit number has seniority add 5%
  if (employee.employeeNumber.length === 4) {
    bonusPct += 5;
  }

  // annual salary greater than 65k subtract 1%
  // Number will do number conversion regardless of float
  // parsetInt will force to whole number (doesn't round) 1.99 -> 1
  // parseFloat will maintain decimal
  if (Number(employee.annualSalary) > 65000) {
    //subtract 1%
    bonusPct -= 1;
  }

  // restricting bonus range from 13 to 0
  if (bonusPct > 13) {
    bonusPct = 13;
  } else if (bonusPct < 0) {
    bonusPct = 0;
  }

  // function calls
  const totalBonus = calcTotalBonus(bonusPct, employee.annualSalary);

  return {
    name: employee.name,
    bonusPercentage: bonusPct,
    totalCompensation: calcTotalCompensation(employee.annualSalary, totalBonus),
    totalBonus: totalBonus,
  };
}

// totalCompensation = annualSalary + totalBonus

function calcTotalCompensation(annualSalary, bonusAmount) {
  const annualSalaryNumber = Number(annualSalary);
  return annualSalaryNumber + bonusAmount;
}

// totalBonus = bonusPct / 100 * annual Salary

function calcTotalBonus(bonusPctWhole, annualSalary) {
  const bonusAsDecimal = bonusPctWhole / 100;
  // rounding total bonus to nearest dollar
  return Math.round(bonusAsDecimal * annualSalary);
}

console.log(employees);

// function employeeBonus(employee) {
//   const newObj = {};
//   if (employee.reviewRating <= 2) {
//     newObj.bonusPercentage = 0;
//   } else if (employee.reviewRating == 3) {
//     newObj.bonusPercentage = 0.04;
//   } else if (employee.reviewRating == 4) {
//     newObj.bonusPercentage = 0.06;
//   } else {
//     newObj.bonusPercentage = 0.1;
//   }

//   return newObj; //new obj, include name, bonus %, total compensation, total bonus
// }
// //employee number is 4 digits receive additional 5%
// if (employees.employeeNumber.length <= 4) {
//   bonusPercentage += 0.05;
// }
// //if annual income is greater than $65k then bonus adjusted down by 1%
// if (employees.employeeSalary >= 65000) {
//   bonusPercentage -= 0.01;
// }
// //no bonus above 13%
// if (employees.bonusPercentage > 0.13) {
//   bonusPercentage = 0.13;
// }
// if (employees.bonusPercentage < 0) {
//   bonusPercentage = 0;
// }
// //calculate total bonus and total compensation
// newObject.totalBonus = bonusPercentage * employeeSalary;

// for (let i = 0; i < employees.length; i++) {
//   console.log(employeeBonus(employee[i]));
// }

// console.log(employeeBonus(employees[0]));

// console.log(employees);
