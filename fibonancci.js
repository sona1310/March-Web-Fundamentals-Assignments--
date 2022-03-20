
  const number = parseInt(20);
  let num1 = 0, num2 = 1, sum;
  
  console.log('Fibonacci Series:');
  
  for (let i = 1; i <= number; i++) 
  {
      console.log(num1);
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
  }



