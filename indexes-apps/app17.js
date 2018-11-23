var a = false;
var b = +prompt("Enter Number");
for (var i = 0; i<= 20; i++){
    if (b%2 === 0){
        a = true;
        document.write(b+" is Even Number");
        break;
    }
    if (a === false){
        document.write(b+" is Odd Number");
        break;
    }
}