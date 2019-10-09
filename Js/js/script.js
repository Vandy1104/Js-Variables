//alert ('Hello from external js');
document.write('You can\'t delete me.');

console.log('HI, I am happy to help you debugging.');

//not a secured way.
document.getElementById('heading').innerHTML+="<br>Learning JS<br>"; //innerHTML

//Secured way but reduced performance.
document.getElementById('heading').innerText+="Hello I am here."; //innerText

document.getElementById('heading').textContent+= "Hello from Text content"; //textContent

var name = "Daniel";

var myName = "Vandy";

myAge = 10;

var yourAge = 20;
var a = 5;
var b = 12;
var c = a + b;


console.log(c);

console.log('c');

console.log(name + ' ' + myName);

var x = '650';

var y = '50';

console.log(x + y);

var myExpression = a + 25 - 3 * 2;

console.log(myExpression);

var ageResult = myAge < yourAge;

console.log(ageResult);

var licenseAge = 16;

var myEligibility = myAge > licenseAge;

console.log(myEligibility);

if (myAge >= licenseAge) {
  alert('Yes, You can drive');
} else {
  alert('Sorry, You can\'t drive');
}
