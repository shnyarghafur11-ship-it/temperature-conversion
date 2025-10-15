const textbox=document.getElementById('textbox');
const farenheit=document.getElementById('farenheit');
const celsius=document.getElementById('celsius');
const submitbtn=document.getElementById('submitbtn');
const result=document.getElementById('result');
let tem;


function convert(){
    if(farenheit.checked){
        tem=textbox.value;
        tem=Number(tem*(9/5)+32);
        result.textContent=tem+"°F";
    }

    else if(celsius.checked){
        tem=textbox.value;
        tem=Number((tem-32)*(5/9));
        result.textContent=tem+"°C";

    }

    else{
        result.textContent="select a unit";
    }

}