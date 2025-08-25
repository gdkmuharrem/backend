"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_repository_1 = require("../repositories/auth.repository");
const jwt_util_1 = require("../utils/jwt.util");
class AuthService {
    constructor() {
        this.saltRounds = 10;
    }
    async validateAdmin(email, password) {
        const admin = await (0, auth_repository_1.findByEmail)(email);
        if (!admin)
            return null;
        const isValid = await bcrypt_1.default.compare(password, admin.password);
        if (!isValid)
            return null;
        return admin;
    }
    async registerAdmin(email, plainPassword) {
        const existing = await (0, auth_repository_1.findByEmail)(email);
        if (existing) {
            throw new Error('Email zaten kullanılıyor');
        }
        const hashedPassword = await bcrypt_1.default.hash(plainPassword, this.saltRounds);
        return (0, auth_repository_1.createAdmin)(email, hashedPassword);
    }
    generateToken(adminId) {
        return (0, jwt_util_1.signToken)({ adminId });
    }
    verifyToken(token) {
        const decoded = (0, jwt_util_1.verifyToken)(token);
        if (!decoded || typeof decoded === 'string')
            return null;
        return decoded;
    }
    async getAdminById(id) {
        return (0, auth_repository_1.findById)(id);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map