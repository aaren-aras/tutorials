
// /* Global Objects */
// console.log('Hello World'); 
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// /* `window` represents the global object in the browser;
//   Browser engine automatically prefixes w/ `window`, so don't need */ 
// window.console.log(); 
// window.setTimeout();
// window.clearTimeout();
// window.setInterval();
// window.clearInterval();

// /* `global` represents the global object in Node;
// v8 engine likewise prefixes w/ `global` automatically */
// global.console.log();
// global.setTimeout();
// global.clearTimeout();
// global.setInterval();
// global.clearInterval();

// // *Note: defined in `window`, but not in `global` (scoped to `app.js` file)
// var message;
// console.log(global.message); // Output: undefined

/* Modules: encapsulated code chunks that help ensure vars and funcs aren't overriden;
Every file is its own module, with its vars and funcs scoped to said file (private in OOP);
  Modules must be explicitly exported (public) to be used in other modules */

// `app.js` is our main module (root of module tree)
// console.log(module); // Output: Module {...}; not global

// const logger = require('./logger'); // Importing `logger.js` module
// console.log(logger); // Output: { log: [Function: log] }
// logger.log('Thanks logger.js!'); // Output: Thanks logger.js!

// // Alternatively... w/ `module.exports = log;` in `logger.js`
// const log = require('./logger'); 
// logger('Thanks logger.js!'); // Output: Thanks logger.js!

/* Built-in PATH module stored in `path` object */
const path = require('path'); 
const pathObject = path.parse(__filename);
console.log(pathObject);

/* Built-in OPERATING SYSTEM module stored in `os` object */
const os = require('os'); 

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);

/* Built-in FILE SYSTEM module stored in `fs` object;
  Methods noticeably come in pairs: async/non-blocking (default) and sync/blocking ("__Sync");
    Best practice: always use async methods! */
const fs = require('fs'); 

const files = fs.readdirSync('./'); // Returns all files/folders in current dir 
console.log(files);

// Calls func when async operation complete (callback)
fs.readdir('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files); 
}); 

/* Built-in EVENTS module stored in `EventEmitter` class (contains props and methods) */
const EventEmitter = require('events'); 
const emitter = new EventEmitter(); // Creates object (class instance)

// Listens to event; equivalent to `.addListener()`; must be placed before `.emit()` ***
emitter.on('messageLogged', arg => { // also called "e" or "eventArg"
  console.log('Received!', arg);
}); 

// Raises event with event args (object)
emitter.emit('messageLogged', { id: 1, url: 'https://'}); 

// *Exercise: raise a "logging" event with data containing "message"
const emitter2 = new EventEmitter();

emitter2.on('logging', arg => {
  console.log('Data received', arg);
});

emitter2.emit('logging', { data: "Wow, this is a message!" }); 

const Logger = require('./logger');
const logger = new Logger();

// Using same `logger` object in `app.js` (listener) and `logger.js` (emitter) 
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);  
});

logger.log('message');

/* Built-in HTTP module stored in `http` object */
const http = require('http');

/* Has EventEmitter methods (`server.on(...)`, `server.emit(...)`) like other core Node functionality;
  Clearly though, as we add more routes, code becomes too complex and inefficient; therefore, use Express.js! */
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Howdy folks.');
    res.end();
  }

  // E.g., respond with course list from database
  if (req.url === 'api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
}); 

// Low-level demo: event name is specific (found in docs), not choosable
// server.on('connection', socket => {
//   console.log('New connection...');
// });

server.listen(3000);
console.log('Listening on port 3000...');
