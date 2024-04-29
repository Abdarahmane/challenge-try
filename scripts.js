function add(a, b) {
     return a + b;
    }
    
 function subtract(a, b) {
     return a - b;
    }
function multiply(a, b) {
     return a * b;
    }
function divide(a, b) {
 if (b === 0) {
  return "Erreur : Division par zero";
    }
        return a / b;


        
    }
    function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
if (operation ==='add') {
    result = num1+ num2;
} else if (operation === 'subtract') {
    result =num1-num2;
    } else if (operation === 'multiply') {
     result = num1*num2;
    } else if (operation === 'divide') {
     result = num1/num2;
    }
    document.getElementById("result").innerText = "Résultat:" +result;
    }