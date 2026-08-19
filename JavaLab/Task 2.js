let fruits = ["apple", "banana", "cherry"];
let ask = prompt("Enter your favourite fruit.");
let newfruit = ask.toLowerCase();

if(fruits.includes(newfruit))
    alert("Yes, we already have " + newfruit + ".");
    
else{
    fruits.push(newfruit)
    alert(newfruit + " has been added to the list.");
}

fruits.splice(1,1,"blueberry");
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.sort();
fruits.reverse();
console.log(fruits);

alert(fruits.join(" "));
fruits.forEach((fruit, index) => {
    console.log((index+1) + "- " + fruit.toUpperCase());
})