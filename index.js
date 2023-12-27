function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  const numberCal = 7; 
  const result = calculateFactorial(numberCal);
  console.log(`The factorial of ${numberCal} is: ${result}`);
  