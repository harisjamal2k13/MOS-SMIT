var a = [12, 45, 3, 22, 34, 50];
var b = prompt("Choose number from these options","12,45,3,22,34,50");
for (var i = 0; i <a.length; i++) {
   if (b === "12" ){
      document.write("12");
      break;
   }
else if (b === "45" ){
      document.write("12,45");
      break;
   }
else if (b === "3" ){
      document.write("12,45,3");
      break;
   }
else if (b === "22" ){
      document.write("12,45,3,22");
      break;
   }
else if (b === "34" ){
      document.write("12,45,3,22,34");
      break;
   }
    else if (b === "50" ){
      document.write("12,45,3,22,34,50");
      break;
   }

  }
    