function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
  
    return word === reversedWord;
  }
  
  const kata = "racecar";
  if (isPalindrome(kata)) {
    console.log(kata + " adalah palindrom.");
  } else {
    console.log(kata + " bukan palindrom.");
  }
  