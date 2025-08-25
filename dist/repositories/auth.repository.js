"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = findByEmail;
exports.findById = findById;
exports.createAdmin = createAdmin;
const prismaClient_1 = require("../prismaClient");
async function findByEmail(email) {
    return prismaClient_1.prisma.admin.findUnique({ where: { email } });
}
async function findById(id) {
    return prismaClient_1.prisma.admin.findUnique({ where: { id } });
}
async function createAdmin(email, hashedPassword) {
    return prismaClient_1.prisma.admin.create({
        data: {
            email,
            password: hashedPassword,
        },
    });
}
//# sourceMappingURL=auth.repository.js.map