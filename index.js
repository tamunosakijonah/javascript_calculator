var operator = prompt("enter operator either +,-.*,/,");
var num1=prompt("enter first number");
var num2=prompt("enter second number");
let result;
if(operator=="+"){
    result=num1 + num2;
}else if(operator=="-"){
    result = num1 - num2
}
else if(operator=="*"){
    result = num1 * num2
}
else if(operator=="/"){
    result = num1 / num2
}

console.log(alert(`${num1}${operator}${num2}=${result}`));
