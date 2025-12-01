const fullName = "  witthawat   keaowiset   ";
const cleanedName = fullName.trim();
console.log("Claned name: ",cleanedName);

const nameParts = cleanedName.split(" ");
console.log("Name parts:" ,nameParts);

const finalParts = nameParts.filter(Boolean);
console.log("final Name parts:" ,finalParts);

const firstName = finalParts[0];
console.log("First name:",firstName);

