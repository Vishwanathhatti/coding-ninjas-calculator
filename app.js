let display= document.getElementById('display');
let button= document.getElementsByClassName("num");
let operand1= 0;
let operand2=null;
let operator=null;


for(let i=0;i<button.length;i++){
    button[i].addEventListener('click', function(){
        let value= this.getAttribute('data-value');
        if (value === 'AC') {
           
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = "";
        }
       else if(value== '+' || value== '-' || value== '*' || value== '/'|| value== '*' || value== '%'){
            operator=value;
            operand1= parseFloat(display.textContent);
            display.innerText ='';
        }
        else if(value== '='){
            operand2= parseFloat(display.textContent);
            
            if (operator) {
                
                let result;
                if (operator === '/' && operand2 === 0) {
                    result = "Error"; 
                } else {
                    result = eval(operand1 + operator + operand2);
                }
                display.innerText = result;
                operand1 = result; 
                operand2 = null;
                operator = null;
            }
        } else {
           
            display.innerText += value;
        }
    });
}