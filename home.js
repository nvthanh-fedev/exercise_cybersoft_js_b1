/*
    B1: viết hàm
    B2: Định nghịa nội dung hàm khi lick
    B3: Gắn tên hàm vào onlick của nút cần click
*/

// exercises 1: Calculate employee salary
function calculateEmployeeSalary() {
  // debugger;
  // input: numberOfWorkingDays,oneHourSalaryIs
  var numberOfWorkingDays = Number(
    document.getElementById("numberOfWorkingDays").value
  );

  var oneHourSalaryIs = Number(
    document.getElementById("oneHourSalaryIs").value
  );

  console.log("Number of working days is ", numberOfWorkingDays);
  console.log("Salary for 1 hour of work is ", oneHourSalaryIs);
  // output: Calculate employee salary
  var employeeSalary = 0;

  // process:
  if (isNaN(numberOfWorkingDays) || isNaN(oneHourSalaryIs)) {
    document.getElementById("employeeSalary").innerHTML =
      "Please enter Numeric value";
    return false;
  } else {
    employeeSalary = numberOfWorkingDays * oneHourSalaryIs;
    console.log("Employee's salary is ", employeeSalary);
    document.getElementById("employeeSalary").innerHTML =
      "Employee's salary is " + employeeSalary.toFixed(0) + " $";
    return true;
  }
}

// exercises 2: Calculate the mean
function calculateTheMean() {
  // debugger;

  // input: firstValue, secondValue, thirdValue, fourthValue, fifthValue
  var firstValue = Number(document.getElementById("firstValue").value);
  var secondValue = Number(document.getElementById("secondValue").value);
  var thirdValue = Number(document.getElementById("thirdValue").value);
  var fourthValue = Number(document.getElementById("fourthValue").value);
  var fifthValue = Number(document.getElementById("fifthValue").value);

  console.log("First Value is", firstValue);
  console.log("Second Value is", secondValue);
  console.log("Third Value is", thirdValue);
  console.log("Fourth Value is", fourthValue);
  console.log("Fifth Value is", fifthValue);
  // output: The mean of 5 numbers
  var theMean = 0;

  // process:
  if (
    isNaN(firstValue) ||
    isNaN(secondValue) ||
    isNaN(thirdValue) ||
    isNaN(fourthValue) ||
    isNaN(fifthValue)
  ) {
    document.getElementById("theMean").innerHTML = "Please enter Numeric value";
    return false;
  } else {
    theMean =
      (firstValue + secondValue + thirdValue + fourthValue + fifthValue) / 5;
    console.log("The mean of 5 numbers is ", theMean);
    document.getElementById("theMean").innerHTML =
      "The mean of 5 numbers is " + theMean;
    return true;
  }
}

// exercises 3: Convert USD to VND
function currencyConversionFromUSDToVND() {
  // debugger;
  // input: dollarAmount
  var dollarAmount = Number(document.getElementById("dollarAmount").value);
  console.log("The number of USD is ", dollarAmount, " USD");

  // output: Convert USD to VND
  var vietnameseDong = 0;

  // process:
  if (isNaN(dollarAmount)) {
    document.getElementById("vietnameseDong").innerHTML =
      "Please enter Numeric value";
    return false;
  } else {
    vietnameseDong = dollarAmount * 23500;
    console.log("The number of VND is", vietnameseDong, " VND");
    document.getElementById("vietnameseDong").innerHTML =
      vietnameseDong.toFixed(0) + " VND";
    return true;
  }
}

// exercises 4: Calculate the perimeter and area of ​​the rectangle
function calculateThePerimeterAndTheArea() {
  // debugger;

  // input: firstEdge,secondEdge
  var firstEdge = Number(document.getElementById("firstEdge").value);
  var secondEdge = Number(document.getElementById("secondEdge").value);

  console.log("The length of the first edge is", firstEdge);
  console.log("The length of the second edge is", secondEdge);
  // output: Calculate the perimeter and area of ​​the rectangle
  var thePerimeter = 0;
  var theArea = 0;

  // process:
  if (isNaN(firstEdge) || isNaN(secondEdge)) {
    document.getElementById("thePerimeter").innerHTML = "Wrong number format";
    document.getElementById("theArea").innerHTML = "Please enter Numeric value";
    return false;
  } else {
    thePerimeter = (firstEdge + secondEdge) * 2;
    console.log("The Perimeter of a rectangle is", thePerimeter);

    document.getElementById("thePerimeter").innerHTML =
      "The Perimeter of a rectangle is " + thePerimeter;

    theArea = firstEdge * secondEdge;
    console.log("The Area of a rectangle is", theArea);

    document.getElementById("theArea").innerHTML =
      "The Area of a rectangle is " + theArea;

    return true;
  }
}

// exercises 5: Calculate the sum of there digits
function sumOfThereDigits() {
  // debugger;
  // input: threeDigitInteger
  var threeDigitInteger = Number(
    document.getElementById("threeDigitInteger").value
  );

  // output: The sum of there digits
  var sumOfThereDigits = 0;

  // process:
  if (isNaN(threeDigitInteger)) {
    document.getElementById("sumOfThereDigits").innerHTML =
      "Please enter Numeric value";
    return false;
  } else {
    if (threeDigitInteger <= 999 && threeDigitInteger >= 0) {
      var hundreds = Number(Math.floor(threeDigitInteger / 100));
      var tens = Number(Math.floor((threeDigitInteger % 100) / 10));
      var units = Number((threeDigitInteger % 100) % 10);

      console.log("Hundreds is ", hundreds);
      console.log("Tens is ", tens);
      console.log("Units is ", units);
      sumOfThereDigits = hundreds + tens + units;
      console.log("Sum of there digits is", sumOfThereDigits);
      document.getElementById("sumOfThereDigits").innerHTML =
        "The sum of three digit integer is " + sumOfThereDigits.toFixed(0);
      return true;
    } else {
      document.getElementById("sumOfThereDigits").innerHTML =
        "Please enter three digit integer <= 999 and >=0";
      return false;
    }
  }
}
