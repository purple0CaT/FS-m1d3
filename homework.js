/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20.
*/

function ex1(){
    return 12+20
 }
 
 /* EXERCISE 2
 Create a variable named x containing the number 12. Then, UNCOMMENT the "return x" line.
 */
 
 function ex2(){
   let x = 12
   return x
 }
 //
 /* EXERCISE 3
 Create a variable named name containing the string John Doe Then, UNCOMMENT the "return name" line.
 */
 
 function ex3(){
   let name = 'John Doe'
    /* WRITE YOUR CODE HERE */
   return name
 }
 
 /* EXERCISE 4
 Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
 Then, UNCOMMENT the commented out lines.
 */
 
 function ex4(){
   let x = 12
   let result = x - 12 
   return result
 }
 
 /* EXERCISE 5
 Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
 Verify that name1 is different from name2. 
 Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
 Eventually, return both result1 and result2
 Then, UNCOMMENT the commented out lines.
 */
 
 function ex5(){
   let name1 = 'john'
   let name2 = 'John'
 
     let result1 = name1.toLowerCase() !== name2.toLowerCase()
     let result2 = name1.toLowerCase() === name2.toLowerCase()
     
   return {
     result1, result2
   }
 }
 
 
 /* EXERCISE 6
 Write the code to print the literal value of a number x: its value must be less than 10. (ex.: if x is 1 print "one", if 5 print "five" etc.).
 Then, UNCOMMENT the commented out lines.
 */
 
 function ex6(x){
       let print
 
   if ( !isNaN(x) && x >= 0 && x <= 10){
 
         if ( x == 0 ){
             print = 'zero'
         }
         if ( x == 1 ){
             print = 'one'
         }
         if ( x == 2 ){
             print = 'two'
         }
         if ( x == 3 ){
             print = 'three'
         }
         if ( x == 4 ){
             print = 'four'
         }
         if ( x == 5 ){
             print = 'five'
         }
         if ( x == 6 ){
             print = 'six'
         }
         if ( x == 7 ){
             print = 'seven'
         }
         if ( x == 8 ){
             print = 'eight'
         }
         if ( x == 9 ){
             print = 'nine'
         }
         if ( x == 10 ){
             print = 'ten'
         }
 
     } else 
 {
         print = "Your number is more than 10, or less then 0, or even not a number"
     }
     
   let numberAsString = print
   return numberAsString
 }
 
 console.log(ex6(2)) // expected: "two"
 
 /* EXERCISE 7
 Return the largest between two numbers a and b using a ternary operator.
 Then, UNCOMMENT the commented out lines.
 */
 
 function ex7(a, b){
  let num = a > b ? a : b
  const largest = num
 
    return largest
 }
 
 console.log(ex7(10, 20)) // expected: 20
 
 
