const err_status = 700;

if(err_status === 200) {
    //ok
    console.log("OK status");
}else if(err_status === 400) {
    //Error
    console.log("Error status");
}else{
    console.log("Unknown status");
}

switch(err_status) {
    case 200:
        console.log("OK status");
        break;
    case 400:
        console.log("Error status");
        break;
    default:
        console.log("Unknown status");
        break;
}

const message = (err_status === 200) ? "OK status" :"Error status";
console.log(message);