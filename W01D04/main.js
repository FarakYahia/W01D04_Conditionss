console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

// 1
if (10 <= 10){
}

// 2
if (5 > 3) {
}

// 3
if (5 > 10){
} else {
      console.log(true)
}

// 4
if (2 < 3 || 7 > 10) {
}

// 5
if ("hello" == "hello"){
}

//2 Predict the value of the following expressions and explain why.

//  true && true && false;
false 


// true || (true && false);
true 

//  5 === 2 || 1 < 10;
true 

//(!false && true) || (!true && true);
true

//4 Write a function isItMyName that accepts one argument name and returns true if the name is the same as your name and return false if it is not.
//1
const isItMyName = function (name){
    if (name) {
        return 'John'
    } else {
        return 'false'
    }
}
// 5Write a function positiveOrNegative that accepts one argument number and returns a string saying whether the number is positive, negative, or if it is a neutral number like zero.
const positiveOrNegative = function (number) {
    if (number >= 1) {
    return "positive"
} else if (number < 0) {
    return "negative"
} else {
    return "0"
}
}
//Practice
//1
const toLowerOrUpperCase = function (string, strCase) {
    if (string) {
        toUpperCase() 
 }else 
 return "strCase"
 }

 //2
 const howLong = function (string) {
     if (string <= 5) {
         return "short"
     } else if (string > 5 <=8) {
         return "medium"
    } else if (string >= 9 <= 13) {
         return "long"
         } else {
         return "very long"

     }
 }



 //3
 const startsWith = function (string, character) {
     if (string[0] ==character ) {
         return "true"

     } else if (string[0] != character) {
         return "false"
     }
 }

 //4
 const endsWith = function (string, character) {
if (string[4] == character) {
    return "true"
} else 
    return "false"
}
 


  //5
  const deposit = function (amount) {
      if (amount >= 1) {
        return "amount"
      } else if (amount < 0) {
     return "Please enter a positive number"
      } else {
          return "Please enter a number"
      }
      
  }

  //6
  const oddOrEven = function (number) {
      if (number < 0) {
          return "odd"
      } else {
          return "even"
      }
  }

  //7
  const stringCase = function (string) {
      if (strivg = toUpperCase){
          return "all upper case"
      } else if (string = Minuscule){
          return "all lower case"
      } else {
          return "mix case"
      }
  }

  //8
  const isLeapYear = function (year) {
      if (year / 400) {
          return "true"
      } else {
          return "false"
      }
    }

    //9
    const login = function (username, password) {
        if ((username > 6) && (passwor >= 8)) {
            return "login failed"
        } else {
            return "login successful"
        }

    }
    //10
    const login = function (username, password) {
          if ((username > 6) && (passwor >= 8)) {
            return "login failed"

        } else if (username[0] = toUpperCase ) {
            
        }
    }