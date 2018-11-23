document.write("<h3>Counting</h3>");
for (var i = 1; i < 16; i++){
        document.write(i+",");
}

document.write("<h3>Reverse Counting</h3>");
for (var i = 10; i > 0; i--){
    document.write(i+",");
}

document.write("<h3>Even</h3>");
for (var i = 0; i<11 ; i++){
        document.write(i*2+",");
}

document.write("<h3>Odd</h3>");
for (var i = 1; i<11 ; i++){
        document.write(i*2-1+",");
}

document.write("<h3>Series</h3>");
for (var i = 1; i<11 ; i++){
         document.write(i*2+"k"+",");
 }