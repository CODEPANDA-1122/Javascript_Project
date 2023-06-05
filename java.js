let cal='';
document.body.addEventListener('keydown', (event) => {
    if (event.key === '1') {
      digit('1');
    } 
    else if (event.key === '2') {
      digit('2');
    }
    else if (event.key === '3') {
        digit('3');
      } 
    else if (event.key === '4') {
        digit('4');
      } 
    else if (event.key === '5') {
        digit('5');
      }
    else if (event.key === '6') {
        digit('6');
      } 
    else if (event.key === '7') {
        digit('7');
      } 
    else if (event.key === '8') {
        digit('8')
      } 
    else if (event.key === '9') {
        digit('9');
      } 
    else if (event.key === '0') {
        digit('0');
      } 
    else if (event.key === '/') {
        digit('/');
      } 
    else if (event.key === '*') {
        digit('*');
      } 
    else if (event.key === '-') {
        digit('-');
      } 
      else if (event.key === '+') {
        digit('+');
      } 
      else if (event.key === '=') {
        exp();
      }
      else if (event.key === '.') {
        digit('.');
      }
      else if (event.key === 'Enter') {
        exp();
      }  
      else{
        cal=''
        display();
      }
    });
function digit(item){
    cal+=item;
    display();
}

function exp(){
    try{
    cal=eval(cal);
    if (Number.isInteger(cal)){
      cal=cal.toString();
    }
    else{
      cal=cal.toFixed(2).toString();
    }
}
catch{
    cal="Syntax Error";
}
    display();
   
}

function allclear(){
    cal='';
    display();
   
}

function display(){
    if (cal===''){
        document.getElementById("calculator-screen").innerHTML = "Hello Calculator";
    }
    else if(cal==='Syntax Error'){
        document.getElementById("calculator-screen").innerHTML = `${cal}`;
        cal='';
        setTimeout(()=>{
            document.getElementById("calculator-screen").innerHTML = "Hello Calculator";
           cal='j';
        },1000);
        

    }
    else{
    document.getElementById("calculator-screen").innerHTML = `${cal}`;
    }
}

