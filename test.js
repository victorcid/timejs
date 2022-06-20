const timejs = require('./timejs.js');

Date.prototype.fechaP = function () {
  return  this.getFullYear()+"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+((this.getDate() < 10)?"0":"") + this.getDate() + ' ' +
  ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

console.log(timejs.getTimeG());
console.log(timejs.getTimeL());
console.log(timejs.getTimeL(-12));
console.log(timejs.getTimeL(0));
console.log(timejs.getTimeL(24));
console.log(timejs.getTimeL(25));
console.log(timejs.getTimeL(-24));
console.log(timejs.getTimeL(-25));

console.log();
console.log(new Date('1975-08-19T23:15:30.000Z').getTime());
console.log(timejs.getTimeG('1975-08-19T23:15:30.000Z')); //es la hora universal
console.log(timejs.getTimeG('August 20, 1975 06:15:30 GMT+07:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 16:15:30 GMT-07:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 17:15:30 GMT-06:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 23:15:30')); //toma la hora local

console.log();
console.log(new Date(new Date('1975-08-19T23:15:30.000Z').getTime()));
console.log(new Date(timejs.getTimeG('1975-08-19T23:15:30.000Z')));
console.log(new Date(timejs.getTimeG('1975-08-19T23:15:30+0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30+0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30-0000')));//da problemas
console.log(new Date(timejs.getTimeG('1975/08/19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeG('1975/08/19 23:15:30 -0000')));
console.log(new Date(timejs.getTimeG('August 20, 1975 06:15:30 GMT+07:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 16:15:30 GMT-07:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 17:15:30 GMT-06:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 23:15:30')));

console.log();
console.log(new Date(timejs.getTimeL('1975-08-19T23:15:30.000Z')));
console.log(new Date(timejs.getTimeL('1975-08-19T23:15:30+0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30+0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30-0000')));//da problemas
console.log(new Date(timejs.getTimeL('1975/08/19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeL('1975/08/19 23:15:30 -0000')));
console.log(new Date(timejs.getTimeL('August 20, 1975 06:15:30 GMT+07:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 16:15:30 GMT-07:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 17:15:30 GMT-06:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 23:15:30')));
console.log(new Date(timejs.getTimeL('August 19, 1975 23:15:30')).fechaP());

console.log();
console.log(new Date(timejs.getTimeL(null)));
console.log(new Date(timejs.getTimeL(null,-5)));
