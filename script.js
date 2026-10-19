console.log("Hello Word");
var a=12
a=200
console.log(a);
//let c=12
//let b=200

(5==5) ? 'a':'b' //a


let a=2

let b=5

let c=a+b;
console.log(c);

let ch2=4567

res=a/1000
console.log(Math(floor(res)))


let daynum = parseInt(prompt("Enter the Number"));
let day;

switch (daynum) {
    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

    case 7:
        day = "Sunday";
        break;

    default:
        day = "Invalid number! Enter a number between 1 and 7.";
}

console.log(day);

for(let i=1;i<=10;i++)
{
    console.log("Hello Worl" , i)
}

function func(name,age)
{
    return console.log(name,age);
}

for (let key in obj)
{
    console.log(`${key}="${obj[key]}"`);
}
function change()
{
    let ele=document.getElementsByTagName('h1')
    ele[0].innerText="Vinayak"
    ele[0].style.backgroundColor="Green"
}
