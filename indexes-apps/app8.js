var a = ["cake","apple pie", "cookie","chips", "patties"];
var b = prompt("Search Bakery items");

if (b === a[0]){
    document.write("cake is avaialable at index 0 in our bakery");
}
else if (b === a[1]) {document.write("apple pie is avaialable at index 1 in our bakery");
}
else if (b === a[2]) {document.write("cookie is avaialable at index 2 in our bakery");
}
else if (b === a[3]) {document.write("chips is avaialable at index 3 in our bakery");
}
else if (b === a[4]) {document.write("patties is avaialable at index 4 in our bakery");
}
else{
    document.write(b+" is not available");
}