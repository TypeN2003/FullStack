const names = [ 'Justin', 'Sarah', 'Christopher'];

for (let i = 0; i < names.length; i++) {
    console.log('Hello ' + names[i]);
}

names.forEach(names => {
    console.log('Hello ' + names);
});


names.forEach(MyFunction);
function MyFunction(name) {
    console.log('Hello ' + name);
}

for(let name of names) {
    console.log('Hello ' + name);
}