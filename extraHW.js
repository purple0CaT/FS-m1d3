// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of a 'isMale' parameter
*/

function ex1(isMale) {
    const string = isMale ? 'male' : 'female'
    return string
  }
  
  console.log(ex1(true)) // expected "male"
  console.log(ex1(false)) // expected "female"
  
  /*
   2. Write code to check from two given integers a and b whether one of them is 8 or their sum or difference is 8.
  */
  
  function ex2(a, b) {
    const num = 8
    if (a == num || b == num) {
      return true;
    }
    if (a + b == num || Math.abs(a - b) == num)
    {
      return true;
    }
  
    return false;
  }
  
  console.log(ex2(8, 0)) // a is 8 -> expected: true
  console.log(ex2(15, 7)) // 15 - 7 = 8 -> expected: true
  console.log(ex2(7, 1)) // 7 + 1 expected: true
  
  console.log(ex2(7, 2)) // expected: false
  
  /*
    3. Return a variable that concatenates two strings a and b.
  */
  function ex3(a, b) {
  const string = a + b
  
  return string
  }
  
  console.log(ex3("Strive ", "School")) // expected: "Strive School"
  
  /*
  4.Write a JavaScript conditional statement to sort three numbers in ascending order. Display the result in the console.
  */
  function ex4(a,b,c) {
  let ascen = [a, b, c]
      ascen.sort((a, b) =>(a-b))
    return  ascen
  }
  
  console.log(ex4(8,10,3)) // expected: [3, 8, 10]
  
  
  /*
   5. Write code to find the average of two given integers.
  */
  function ex5(a,b) {
    let num = ( a + b ) / 2
    return num
  }
  /* 
    6. Find the longest of two given strings
  */
  function ex6(a,b) {
    let string = a.length > b.length ? a : b
    return string
  }
  /*
   7. Write code to check whether a value is a number or not.
  */
  function ex7(value) {
          if (!isNaN(value)) {
            return true
          }
        return false
  }
  /*
   8. Write code to calculate the percentage (%) of a number.
          Ex.: 20% of 400 is 80
  */
  function ex8(perc, num) {
    let calc = num * (perc / 100)
    return calc
  }
  
  console.log(ex8(20, 400)) // expected: 80
  
  /*
   9. Write code to check if a given number is even or odd.
  */
  function ex9(num) {
  let calc = num % 2 == 0 ? 'even' : 'odd'
    return calc
  }
  
  console.log(ex9(4)) // expected: "even"
  console.log(ex9(9)) // expected: "odd"
  
