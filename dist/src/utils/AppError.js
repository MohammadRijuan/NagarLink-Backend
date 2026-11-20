"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
// Creating a custom error class named AppError
// It inherits all properties and methods from JavaScript's built-in Error class
class AppError extends Error {
    // Declaring a public property to store the HTTP status code
    statusCode;
    // Constructor runs automatically whenever we create an AppError object
    // statusCode = HTTP status (404, 400, 500, etc.)
    // message = Error description
    // stack = Optional custom stack trace; defaults to an empty string
    constructor(statusCode, message, stack = "") {
        // Calls the parent Error class constructor
        // Initializes the error message and inherited Error properties
        // we use message instead of status code Because the built-in Error class expects an error message, not an HTTP status code.
        super(message);
        // Stores the provided HTTP status code in the current AppError object
        this.statusCode = statusCode;
        // Checks whether a custom stack trace was provided
        if (stack) {
            // If provided, assign the custom stack trace to the error object
            this.stack = stack;
        }
        else {
            // If no custom stack trace was provided:
            // Generate a stack trace automatically
            // 'this' = current AppError object receiving the stack trace
            // 'this.constructor' = AppError constructor
            // Excludes the AppError constructor from the displayed stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.AppError = AppError;
// Example: Create and throw a custom 404 error
// throw new AppError(404, "User Not Found");
//# sourceMappingURL=AppError.js.map