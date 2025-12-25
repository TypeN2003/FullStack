const registrationDate = new Date('2023-08-15T10:30:00');
const options={
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok',
};
const formattedDate = 
registrationDate.toLocaleDateString('th-TH',options);
console.log(`วันที่ลงทะเบี555ยน: ${formattedDate}`); // Output: วันที่ลงทะเบียน: 15 สิงหาคม 2023
