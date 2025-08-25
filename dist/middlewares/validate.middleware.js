"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateBody = void 0;
const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.format();
            return res.status(400).json({ message: 'Validation failed', errors });
        }
        req.body = result.data;
        next();
    };
};
exports.validateBody = validateBody;
const validateParams = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.params);
        if (!result.success) {
            const errors = result.error.format();
            return res.status(400).json({ message: 'Validation failed', errors });
        }
        // İstersen req.params = result.data yapabilirsin ama genelde gerek yok
        next();
    };
};
exports.validateParams = validateParams;
//# sourceMappingURL=validate.middleware.js.map