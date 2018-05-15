function reverseString(str) {
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
newString += str[i];
}
return newString;
}
var palindrome = reverseString("ibu ratna antar ubi");
console.log(palindrome);
