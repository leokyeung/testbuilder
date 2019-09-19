// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // first detect the number
  // if condition
  var firstOne = cardNumber.substring(0, 1);
  var firstTwo = cardNumber.substring(0, 2);
  var firstThree = cardNumber.substring(0, 3);
  var firstFour = cardNumber.substring(0, 4);
  var firstSix = cardNumber.substring(0, 6);
  var cardLength = cardNumber.length;

  if ( firstTwo === "38" || firstTwo === "39"){
    if( cardLength === 14){
    return `Diner's Club`;
    }
  } else if(firstTwo === "34" || firstTwo === "37") {
    if ( cardLength === 15){
      return `American Express`;
    }
  } else if ( firstTwo === "51" || firstTwo === "52" || firstTwo === "53" || firstTwo === "54" || firstTwo === "55"){
    if(cardLength === 16){
      return `MasterCard`;
    }
  } else if ( firstFour === "6011" || firstThree === "644" || firstThree === "645" || firstThree === "646" || firstThree === "647" || firstThree === "648" || firstThree === "649" || firstTwo === "65"){
    if (cardLength === 16 || cardLength === 19){
      return `Discover`;
    }
  } else if ( firstFour === "5018" || firstFour === "5020" || firstFour === "5038" || firstFour === "6304"){
    if ( cardLength >= 12 && cardLength <= 19){
      return `Maestro`;
    }
  } else if ( (firstFour >= "6282" && firstFour <= "6288") || (firstThree >= '624' && firstThree <= '626') || ( firstSix >= "622126" && firstSix <= "622925")){
    if(cardLength === 16 || cardLength === 18 || cardLength === 19){
      return `China Union`;
    }
  } else if ( (firstFour === "4903" || firstFour === "4905" || firstFour === "4911" || firstFour === "4936") && (cardLength === 16 || cardLength === 18 || cardLength === 19)){
    return `Switch`;
  } else if ( firstOne === "4" && (cardLength === 13 || cardLength === 16 || cardLength === 19)){
    return `Visa`;
  } else if( (firstSix === "564182" || firstSix === "633110" || firstFour === "6333" || firstFour === "6759")){
    if (cardLength === 16 || cardLength === 18 || cardLength === 19){
      return `Switch`;
    }
  }

};
