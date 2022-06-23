function openCal(){
    let finalResult;
    let firstnumber = prompt('Please Enter the First Value', '0');
    let operator = prompt('Enter "/" or "*" or "+" or "-"','');
    let secondnumber = prompt('Please Enter the Second Value', '0');

    if(operator == "/"){
        finalResult = firstnumber / secondnumber;
        alert('Your Final is: ' + finalResult);
    } else if(operator == "*"){
        finalResult = firstnumber * secondnumber;
        alert('Your Final is: ' + finalResult);
    } else if(operator == "+"){
        finalResult = parseInt(firstnumber) + parseInt(secondnumber);
        alert('Your Final is: ' + finalResult);
    } else if(operator == "-"){
        finalResult = firstnumber - secondnumber;
        alert('Your Final is: ' + finalResult);
    } else{
        alert('Sorry, your Operator was not Understood');
    }
}