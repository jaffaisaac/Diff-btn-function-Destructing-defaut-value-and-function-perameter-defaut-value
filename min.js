function foo ( {num1 = 42} ={} ,{num2}={ num2:42}){
    console.log(num1 ,num2)
}

foo();  //42 42

foo({num2: 30});  //42 30

foo({},{})  //42 unidefined


// n this example, if you do not pay attention to the output, it might seem like we 
// have declared a default value of 42 for both num1 and num2 in two different ways. The 
// first function call also indicates the same. But the second function call, where two empty 
// objects are passed into the function, tells a different story.
// If you observe closely, there is a subtle difference in the two ways of declaring the 
// values of the parameters. In the above example, the function foo takes two parameters:
// •	 { num1 = 42 } = {}
// •	 { num2 } = { num2: 42 }
// When no argument is passed to the function, the first parameter defaults to an empty 
// object {}, but since it uses object destructuring, the named parameter num1 defaults to 42, 
// both in this case and also when the object passed in as an argument does not have num1
// as a property.
// In the case of the second argument, the default parameter value is an object { num2: 
// 42 }. The parameter defaults to this object when there is no second argument provided to 
// the function. Because of the destructured object on the left-hand side, when the parameter 
// defaults to the object, num2 is set to 42. But in the case where an empty object {} is passed 
// as a second argument, the default value is never used, and the { num2 } destructuring 
// // occurs against the passed in {} empty object value, resulting in num2 set to undefined.