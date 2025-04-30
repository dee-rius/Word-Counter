const para = document.querySelector("p");

let parawords = para.innerHTML.split(" ");
console.log(parawords);

let wordCount = 0;
for(paraword of parawords)
{
  if(paraword.toLowerCase() == "word")
  {
    wordCount++;
  }
}

console.log(wordCount);
