function myCalc()
{
  var redo = prompt("Would you like to make a calculation? Y or N")
  while (redo == "Y") {

    var num1 = parseFloat(prompt("first value")); //CONVERTING A STRING TO A FLOAT
    var operator = prompt("Please choose your operators, +, -, *, / "); //
    var num2 = parseFloat(prompt("second value")); //PARSE DOES THE CONVERSION

    if(operator == "/"){
      alert(num1 / num2);
    }
      else if (operator == "-"){
        alert(num1 - num2);
      }
        else if (operator == "*") {
          alert(num1 * num2);
        }
          else if(operator == "+") {
            alert(num1 + num2);
          }
            else{
              alert(num1 + num2);
            }
        redo = prompt("Would you like to make a calculation? Y or N")
    }

  }
