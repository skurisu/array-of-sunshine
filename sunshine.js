/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
  var something = str.split("").reverse().join("");
  return something;

}

/**
  Write a function that takes two parameters as input in the order of string, character. 

  With the first string parameter use Array functionality remove the last character and put it at the beginning
  of the array. 

  Then insert the character passed in the second parameter into the second to last position of the array.
  
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
  var strArray = str.split("");
  var lastChar = strArray.pop();
  strArray.unshift(lastChar);

  strArray.splice(-1, 0, char);


  return strArray.join("");
}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and 

  returns a duplicate array with all strings
  in pig latin form. 

  (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
  return strArray.map(function (word) {
    var wordArray = word.split("");
    var firstChar = wordArray.shift();
    wordArray.push(firstChar,"ay");
    return wordArray.join("");
  });

}
