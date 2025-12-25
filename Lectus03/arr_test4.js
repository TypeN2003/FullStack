const message = "Hello World";
const vowels = "aeiouAEIOU";

for (const ch of message) {
  if (vowels.includes(ch)) {
    console.log(ch);
  }
}
