//Solution for Caesars Cipher Jose Eduardo Diaz Morales
function rot13(str) {
  var decoded = "";

  for (var i = 0; i < str.length; i++) {
    var ascii = str[i].charCodeAt();
    
    if (ascii >= 65 && ascii <= 90) {
      // A-Z in ASCII are 65-90
      decoded += String.fromCharCode((ascii - 65 + 13) % 26 + 65);
    } else {
      decoded += str[i];
    }
  }

  return decoded;
}

console.log(rot13("SERR PBQR PNZC")); // should print "FREE CODE CAMP"
