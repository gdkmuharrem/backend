"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthMiddleware = adminAuthMiddleware;
function adminAuthMiddleware(authService) {
    return (req, res, next) => {
        const token = req.cookies['token'];
        if (!token) {
            return res.status(401).json({ message: 'Authentication token missing' });
        }
        const decoded = authService.verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        req.adminId = decoded.adminId;
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map