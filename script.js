//your JS code here. If required.
let a=prompt("Enter a number between 1 to 20: ");
if(a%3==0){
	alert(`${a} \nFizz`);
}
else if(a%5==0){
	alert(`${a} \nBuzz`);
}
else if(a%3==0 && a%5==0){
	alert(`${a} \nFizzBuzz`);
}