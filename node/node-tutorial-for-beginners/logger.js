
// Node wraps module code in a function like this ("module wrapper func" is an IIFE):
// (function(exports, require, module, __filename, __dirname) {
  console.log(__filename); // Output: .../node-tutorial-for-beginners/logger.js
  console.log(__dirname); // Output: .../node-tutorial-for-beginners

  const EventEmitter = require('events');
  const url = 'https://mylogger.io/log';

  // With `extends`, `Logger` class has all functionality of parent `EventEmitter` class
  class Logger extends EventEmitter {
    // Don't need `function` keyword; this is a method now
    log(message) {
      console.log(message);
      // Directly emit/raise events w/o an instantiated `emitter` obj 
      this.emit('messageLogged', { id: 1, url: 'https://'}); 
    }
  }

  // Keep `url` private, make `log` public
  // module.exports.endPoint = url; // Exporting `url` var as "endPoint"
  // module.exports.log = log; // Exporting `log` func under `log` property of `logger` object
  // exports.log = log; // Same as above

  // Alternatively...
  // module.exports = log; // Exporting just `log` func
  // exports = log; // Doesn't work (`exports` only references `module.exports`)

  module.exports = Logger;
// });


