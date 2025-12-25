const kvArray=[
    {key:1, value:10},
    {key:2, value:20},
];

const reFormedArray = kvArray.map(
    ({key,value})=>({[key]:value})
);

console.log(reFormedArray);