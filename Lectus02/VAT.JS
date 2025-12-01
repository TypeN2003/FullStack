const productPrice = 1599.50;  // The original price of the product
const vatRate = 0.07;          // The VAT rate (7%)
const totalPrice = productPrice * (1 + vatRate);  // Calculate the total price by adding VAT
// totalPrice = 1599.50 * (1 + 0.07) = 1599.50 * 1.07 = 1711.465

const roundedPrice = Math.round(totalPrice * 100) / 100;  // Round to two decimal places
// roundedPrice = Math.round(1711.465 * 100) / 100 = Math.round(171146.5) / 100 = 171146 / 100 = 1711.47

console.log(`ราคาสุทธิ (Math.round): ${roundedPrice}`);  // Log the rounded total price with a message in Thai
// Output: ราคาสุทธิ (Math.round): 1711.47

//TOFIXED
//---------------------------------------------------------------------
const fixedPrice = totalPrice.toFixed(2);  // Round the totalPrice to 2 decimal places, return as a string
console.log(`ราคาสุทธิ (.toFixed): ${fixedPrice}`);  // Log the fixed price in Thai
// Output: "1711.47"
