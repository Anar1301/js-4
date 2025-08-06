// function lengthOfLastWord(s) {
//   s = s.trim();

//   const words = s.split(" ");

//   return words[words.length - 1].length;
// }
// const s = "Hello World";
// console.log(lengthOfLastWord(s));

// const lengthOfLastWord = (s) => {
//   let lastWordLength = 0;
//   let isFindLastWord = false;
//   for (let i = s.length - 1; i >= 0; i++) {
//     const char = s(i);
//     if (char !== " ") {
//       isFindLastWord = true;
//       lastWordLength++;
//       console.log(s(i));
//     } else {
//       if (isFindLastWord) {
//         return lastWordLength;
//       }
//     }
//   }
// };

// const isPalindrome = (s) => {
//   s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// const s = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(s));
