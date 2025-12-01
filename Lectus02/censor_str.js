function censoeWoed(sentence,wordToCensor){
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalSentence = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
const cleanPost = censoeWoed(originalSentence, "dog");
console.log("Censored Post:", cleanPost);