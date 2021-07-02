let inputBox = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let exp = "";
for(var i=0; i<document.querySelectorAll("button").length;i++){
    buttons[i].addEventListener("click", function(){
        if(this.innerHTML === 'X'){
            exp += '*';
            inputBox.value = exp;
        }
        else if(this.innerHTML === '='){
            inputBox.value = eval(exp);
            exp = inputBox.value;
        }
        else if(this.innerHTML === 'C'){
            exp = "";
            inputBox.value = exp;
        }
        else if(this.innerHTML === "back"){
            exp = exp.slice(0,-1);
            inputBox.value = exp;
        }
        else{
            exp += this.innerHTML;
            inputBox.value = exp;
        }
    })
}

document.addEventListener("keypress", function(event){
    let key = event.key;
    console.log(key);
    if(key=="7" || key=="8" || key=="9" || key=="4" || key=="5" || key=="6" || key=="1" || key=="2" 
    || key=="3" || key=="0" || key=="." || key=="+" || key=="-" || key=="*" || key=="/" ||
    key=="=" || key=="c" || key=="C" || key=="X" || key=="x" || key=="%")
    {
    switch(key){
        case "X":
            exp += '*';
            inputBox.value = exp;
        break;
        case "x":
            exp += '*';
            inputBox.value = exp;
        break;
        case "*":
            exp += '*';
            inputBox.value = exp;
        break;
        case "=":
            inputBox.value = eval(exp);
            exp = inputBox.value;
        break;
        case "C":
            exp = "";
            inputBox.value = exp;
        break;
        case "c":
            exp = "";
            inputBox.value = exp;
        break;
        default:
            exp += key;
            inputBox.value = exp;
    }
}
else{
    alert("Only numbers are allowed");
}

})