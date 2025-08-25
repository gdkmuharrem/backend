"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactMessage = createContactMessage;
exports.getAllContactMessages = getAllContactMessages;
exports.getContactMessageById = getContactMessageById;
exports.deleteContactMessage = deleteContactMessage;
exports.markMessageAsRead = markMessageAsRead;
const prismaClient_1 = require("../prismaClient");
function createContactMessage(data) {
    return prismaClient_1.prisma.contactMessage.create({
        data: {
            ...data,
            phone: data.phone ?? null, // undefined ise null gönder
        },
    });
}
function getAllContactMessages() {
    return prismaClient_1.prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
}
function getContactMessageById(id) {
    return prismaClient_1.prisma.contactMessage.findUnique({ where: { id } });
}
async function deleteContactMessage(id) {
    await prismaClient_1.prisma.contactMessage.delete({ where: { id } });
}
async function markMessageAsRead(id) {
    return prismaClient_1.prisma.contactMessage.update({ where: { id }, data: { isRead: true }, });
}
//# sourceMappingURL=contact.repository.js.map