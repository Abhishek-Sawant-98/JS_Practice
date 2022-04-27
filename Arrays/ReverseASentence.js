// JS Code imlementation for : sentence.split(" ").reverse().join(" ")
function reverseSentence(sentence) {
  const words = [];
  let length = sentence.length;
  let word = "",
    j = 0;

  // Substitute for js code : sentence.split(" ")
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      word += sentence.charAt(i);
      words[j++] = word;
      break;
    }
    if (sentence.charAt(i) === " ") {
      words[j++] = word;
      word = "";
      continue;
    }
    word += sentence.charAt(i);
  }

  let reversedSentence = "";

  // Substitute for js code : words.reverse().join(" ")
  while (--j >= 0) {
    reversedSentence += words[j] + " ";
  }
  return reversedSentence;
}

let sentence = "My name is Abhishek Sawant";

console.log("The original sentence is : " + sentence);
console.log("The reversed sentence is : " + reverseSentence(sentence));
