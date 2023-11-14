// *Note: Also incorporating Traversy Media's crash course: https://www.youtube.com/watch?v=BCg4U1FzODs 

//* Basic JS Types *//
let id: number = 5; // "Annotating" JS variables
let company: string = 'Milestone Automation Solutions Inc';
let isPublished: boolean = true;

let jsArray = [1, true, 'Heyo']; // Dynamic (can change type and size)
let ids: number[] = [1, 2, 3, 4, 5];

// *Note: TypeScript can infer type from value, so don't need to annotate (hover over variable)
let sales = 123_456_789; // Underscores for number readability (ignored by compiler)
let course = 'TypeScript';
let num = [1, 2, 3];

//* Basic TS Types *//
/* (1) `any`: avoid if possible */
let x: any = 'Hello';

// Infers `any` for undeclared variables
let y;

// Infers `any[]` for empty arrays
let noombers = [];

// `document` param implicitly has 'any' type without annotation
function render(document: any) { console.log(document); }

/* (2) `unknown`: better than `any` */
let z: unknown;

/* (3) `never`: values that never occur */
let a: never;

/* (4) `void`: absence of value/return type */
let b: void;
function logMessage(message: string): void {
  console.log(message);
}

/* (5) Union: multi-typing */
let pid: string | number; // Can be string OR number
pid = '22';
pid = 22;

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

/* (6) Intersection: combining multiple types into one */
let weight: number & string; // Can be number-string intersection (but `never` happens)

type Draggable = { drag: () => void }
type Resizeable = { resize: () => void }
type UIWidget = Draggable & Resizeable; // Must have properties of both

let textBox: UIWidget = {
  drag: () => { },
  resize: () => { }
}

/* (7) Literal: typing w/ exact values */
type Quantity = 50 | 100;
let quantity: Quantity = 50; // Can only be 50 or 100

type Metric = 'cm' | 'm' | 'km';

/* (8) Nullable: use union to handle null, undefined cases */
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Bonjour!');
}

//* Type Assertion: disable type checking by overriding *//
let cid: any = 1;
let customerId = cid as number; // Alternative: let customerId = <number>cid;

//* TS Structures *//
/* Tuples: fixed-length array w/ specific type */
let person: [number, string, boolean] = [7, 'Jimmy McGill', false];

// Conventionally, stick to 2 elements (key, value) for readability
let user: [number, string] = [28, 'Aaren'];

user[0].toExponential(); // Intellisense gives number methods
user[1].toUpperCase(); // Intellisense gives string methods
user.push(1); // Allowed, but not type safe

// Array of tuples
let lawyers: [number, string][]
lawyers = [
  [1, 'Kim'],
  [2, 'Howard'],
  [3, 'Chuck']
]

/* Enums: List of related constants; default first val is 0 and increments by 1, but can be overriden */
// Instead of `const small = 1; const medium = 2; const large = 3;`, use: 
const enum Size { Small = 1, Medium, Large } // PascalCase
let mySize: Size = Size.Large;
console.log(mySize);

const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

/* TS Functions: always annotate params and return type */
// Use `?` to make params optional, or give default value 
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2023);
calculateTax(10_000);

// *Note: enable `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns` in tsconfig.json

/* TS Objects (alternatively, see `Type Aliases`) */
let employee: {
  readonly id: number, // Cannot change value
  name: string,
  fax?: number, // Can make properties optional with `?`
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Mike Ehrmentraut',
  retire: (date: Date) => { console.log(date) }
}

/* Type Aliases: custom types (recommended for primitives, unions, intersections) */
type Point = number | string;
const p1: Point = 1;

// Can be used for objects, but see `Interfaces` below
type Employee = {
  readonly id: number,
  name: string,
  fax?: number,
  retire: (date: Date) => void
}

let employee2: Employee = {
  id: 2,
  name: 'Lydia Rodarte-Quayle',
  retire: (date: Date) => { console.log(date) }
}

/* Interfaces: custom types (recommended for objects) */
interface Boss {
  readonly id: number,
  name: String,
  fax?: number,
  retire: (date: Date) => void
}

let employee3: Boss = {
  id: 3,
  name: 'Gustavo Fring',
  retire: (date: Date) => { console.log(date) }
}

// Function interfaces
interface MathFunc { (x: number, y: number): number }
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// *Note: cannot use for primitives, unions, intersections

/* TS Classes (OOP) */
interface PersonInterface {
  id: number,
  name: string,
  register(): string
}

class Person implements PersonInterface {
  // Object properties; public (anywhere) by default, private (only class), protected (class + children)
  id: number
  name: string

  constructor(id: number, name: string) {
    // `this`: current class instance/object
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`
  }
}

// Instantiate class (create object)
const person1 = new Person(4, 'Saul Goodman');
console.log(person1);
console.log(person1.register());

// Inheritance (child/subclass of `Person` class)
class Member extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name); // Calls parent class (superclass) constructor
    this.position = position;
  }
}

const member1 = new Member(5, 'Nacho Varga', 'Security');
console.log(member1);
console.log(member1.register());

/* Generics: type placeholders to better operate on >1 type */
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['a', 'b', 'c', 'd']);

// numArray.push('hello'); // Error!
// strArray.push(1); // Error!

//* Optional Chaining *//
type Customer = { birthday?: Date }

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) console.log(customer.birthday)

// Alternatively... (1) Optional property access operator (`?.`): not null nor undefined
console.log(customer?.birthday?.getFullYear());

// (2) Optional element access operator
let customers: any = null;
customers?.[0];

// (3) Optional call operator
let log: any = null;
log?.('a');