console.log("sum");

console.log(process.argv);

const [, , num1, num2] = process.argv;
console.log(num1,num2);

const  sum = (n1, n2) => n1+n2;
console.log(sum(parseInt(num1),parseInt(num2)));
console.log(sum(+num1, +num2));

// console.log(global);