var a = +prompt("Enter Table","2,3,4,5,..");
var b = +prompt("Enter Starting table from");
var c = +prompt("Enter ending table from");

 for (var i = b; i <= c; i++){
    document.write(a+"x"+i+"="+a*i+"<br>");
}