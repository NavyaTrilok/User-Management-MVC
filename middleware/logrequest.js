function logRequest(req, res, next) {
    console.log(`Received ${req.method} request at ${req.url}`);
    next(); // Call next() to pass control to the next middleware or route handler
}

module.exports = {
    logRequest, // Export the logRequest middleware function
};