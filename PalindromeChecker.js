//Solution for Palindrome Checker Jose Eduardo Diaz Morales

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Check if the cleaned string is a palindrome
  let reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

palindrome("eye"); // should return true
