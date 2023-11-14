"use strict";
var _a;
let id = 5;
let company = 'Milestone Automation Solutions Inc';
let isPublished = true;
let jsArray = [1, true, 'Heyo'];
let ids = [1, 2, 3, 4, 5];
let sales = 123456789;
let course = 'TypeScript';
let num = [1, 2, 3];
let x = 'Hello';
let y;
let noombers = [];
function render(document) { console.log(document); }
let z;
let a;
let b;
function logMessage(message) {
    console.log(message);
}
let cid = 1;
let customerId = cid;
let person = [7, 'Jimmy McGill', false];
let user = [28, 'Aaren'];
user[0].toExponential();
user[1].toUpperCase();
user.push(1);
let lawyers;
lawyers = [
    [1, 'Kim'],
    [2, 'Howard'],
    [3, 'Chuck']
];
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Mike Ehrmentraut',
    retire: (date) => { console.log(date); }
};
const p1 = 1;
let employee2 = {
    id: 2,
    name: 'Lydia Rodarte-Quayle',
    retire: (date) => { console.log(date); }
};
let employee3 = {
    id: 3,
    name: 'Gustavo Fring',
    retire: (date) => { console.log(date); }
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const person1 = new Person(4, 'Saul Goodman');
console.log(person1);
console.log(person1.register());
class Member extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const member1 = new Member(5, 'Nacho Varga', 'Security');
console.log(member1);
console.log(member1.register());
let pid;
pid = '22';
pid = 22;
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Bonjour!');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = null;
customers === null || customers === void 0 ? void 0 : customers[0];
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map