function longestString(input){
  
let string = []
let n = []
for(let i = 0 ; i < input.length ;i++){
    if(input[i] === "h"){
    if(string[string.length-1] === "h" || string.length === 0){
        string.push(input[i])
    }
    else {
      if(string.length >= 3 && n.length < string.length){
      n.push(...string)
      }
      string = []
      i--;
    }
  }
    else if(input[i] === "i"){
        if(string[string.length-1] === "h" || "i"){
            string.push(input[i])
        }
    }
    else if(input[i] === "t"){
        if(string[string.length-1] === "i" || "t"){
            string.push(input[i])
        }
    }
    else {hhiitthithit
      if(string.length >= 3 && n.length < string.length){
      n.push(...string)
      }
      string = []
    }
}
if(string.length > n.length){
    return string.length
}
else if(string.length > n.length){
    return n.length
}
else {
  return n.length
  }
}

console.log(longestString("hithithit"))

// ------------>  longestString End <---------------- ///

function infixToPrefix(input){
  var string = "";
  var stack = []
  var operator = input.split("").reverse().join("")
  var result = ""
  
  
  for (let i = 0; i < operator.length; i++) {
      if (operator[i] == "(") {
          result += ")"
          continue;
      }
      else if (operator[i] == ")") {
          result += "("
          continue;
      }
      else {
          result += operator[i]
      }
  }
  function predence(op) {
      if (op == "^") {
          return 3;
      }
      else if (op == "*" || op == "/") {
          return 2;
      }
      else if (op == "+" || op == "-") {
          return 1;
      }
      else {
          return -1
      }
  }
  for (let i = 0; i < result.length; i++) {
      if ((result[i] >= "a" && result[i] <= "z") ||
          (result[i] >= "A" && result[i] <= "Z") ||
          (result[i] >= "0" && result[i] <= "9")) {
          string += result[i]
      }
      else if(result[i] == "("){
        stack.push(result[i])
      }    
      else if (result[i] == ")") {
          while (stack[stack.length - 1] != "(") {
              console.log(stack)
              string += stack.pop()
          }
          stack.pop()
      }
      else {
        if(stack.length-1 !==undefined){
          while(stack.length > 0 && predence(result[i]) < predence(stack[stack.length-1])) {             
                  string += stack.pop()              
          }
              stack.push(result[i])
          }
      }
  }
  while (stack.length > 0) {
      string += stack.pop()
  }
  return string.split("").reverse().join('')
}

console.log(infixToPrefix("a+b"))

// ------------>  infixToPrefix End <---------------- ///

function FindPair(input){
  let result = []
  for(let i = 0 ; i < input.length ; i++){
    for(let j = i + 1 ; j < input.length ; j++){
      if(input[j] > input[i]){
        result.push([input[j],input[i]])
      }
    }
  }
  return result
}

console.log(FindPair([19, 10, 8, 17, 9]))

// ------------>  FindPair End <---------------- ///

