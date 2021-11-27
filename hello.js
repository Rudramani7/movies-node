console.log("Hello world");

console.log(process.argv);
const num = process.argv[2];
console.log(num);

const double = (n) => n*2 ;
console.log (double(num));