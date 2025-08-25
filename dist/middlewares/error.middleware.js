"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    res.status(status).json({ message });
}
//# sourceMappingURL=error.middleware.js.map