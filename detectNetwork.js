// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var firstOne = cardNumber.substring(0, 1);
  var firstTwo = cardNumber.substring(0, 2);
  var firstThree = cardNumber.substring(0, 3);
  var firstFour = cardNumber.substring(0, 4);
  var cardLength = cardNumber.length;

  if ( firstTwo === "38" || firstTwo === "39"){
    if( cardLength === 14){
    return `Diner's Club`;
    }
  } else if(firstTwo === "34" || firstTwo === "37") {
    if ( cardLength === 15){
      return `American Express`;
    }
  } else if ( firstOne === "4"){
    if(cardLength === 13 || cardLength === 16 || cardLength === 19){
      return `Visa`;
    }
  } else if ( firstTwo === "51" || firstTwo === "52" || firstTwo === "53" || firstTwo === "54" || firstTwo === "55"){
    if(cardLength === 16){
      return `MasterCard`;
    }
  } else if ( firstFour === "6011" || firstThree === "644" || firstThree === "645" || firstThree === "646" || firstThree === "647" || firstThree === "648" || firstThree === "649" || firstTwo === "65"){
    if (cardLength === 16 || cardLength === 19){
      return `Discover`;
    }
  }else if ( firstFour === "5018" || firstFour === "5020" || firstFour === "5038" || firstFour === "6304"){
    if ( cardLength >= 12 && cardLength <= 19){
      return `Maestro`;
    }
  }

};
