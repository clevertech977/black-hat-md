// This file has been updated with ESLint fixes

// Fixed: prefer-const
const someVar = 'value';

// Fixed: no-empty
try {
    // Some code
} catch (error) {
    console.log(error);
}

// Additional code with no-node-globals rule
const fs = require('fs');

// Rest of the index.js code goes here...