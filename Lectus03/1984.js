const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,

  // Method: สำหรับการยืมหนังสือ
  checkOut: function() {
    // 'this' refers to this book object
    this.isAvailable = false;
  },

  // Method: สำหรับการคืนหนังสือ
  checkIn: function() {
    // 'this' refers to this book object
    this.isAvailable = true;
  }
};

console.log(`Title : ${book.title}`);
console.log(book.isAvailable); // true
book.checkOut(); // เรียกใช้ method
console.log(book.isAvailable); // false
book.checkIn(); // เรียกใช้ method
console.log(book.isAvailable); // true