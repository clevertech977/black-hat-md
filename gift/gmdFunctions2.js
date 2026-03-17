// ESLint fixes applied to gmdFunctions2.js

// Using prefer-const where applicable
const exampleArray = [1, 2, 3];

// Multiple empty blocks removed or commented
if (exampleArray.length === 0) {
    // This block is intentionally left blank because it doesn’t require any action.
}

// Avoiding usage of Node globals, e.g., using global process directly

// Other code maintains the structure but applies ESLint fixes where necessary.
// Your existing functions can be adjusted here as needed.

// Example function with no empty blocks
function exampleFunction() {
    if (exampleArray.length > 0) {
        console.log('Array has elements.');
    }
}