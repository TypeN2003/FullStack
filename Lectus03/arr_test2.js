let values1 =['Apple',1,false];
let values2 =['Fries',2,true,'Apple'];
let values3 =['Mars',9,'Apple'];

let valall = []
values1.forEach(val1 => {if(values2.includes(val1) && values3.includes(val1)){
    valall.push(val1);
}});

console.log(valall);


//โต้ดแบบวน for of แบบง่ายๆๆ

// let valall2 =[]

// for (val1 of values1){
//     for (val2 of values2){
//         for (val3 of values3){
//             if (val1 === val2 && val1 === val3){
//                 valall2.push(val1);
//             }   
//         }
//     }
// }
// console.log(valall2);
