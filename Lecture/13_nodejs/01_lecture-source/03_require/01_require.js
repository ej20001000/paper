const multiModule = require('./module');

console.log(multiModule);

const result = multiModule.calc.plus(1,3)
multiModule.print.valuePrinter(result);