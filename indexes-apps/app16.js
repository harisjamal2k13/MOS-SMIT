var a = +prompt("Enter Number to decrement of .5 to print reverse value   ");
 var b = [];
 for(var i = 0 ; i < a*2+1; i++){
      
        b.push(a); 
            a=a-0.5;
 }
 for(var j = 0 ; j < b.length; j++){
 document.write(b[j]+",");
 }

