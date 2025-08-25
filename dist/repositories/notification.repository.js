"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = createNotification;
exports.getNotifications = getNotifications;
exports.markNotificationAsRead = markNotificationAsRead;
exports.countUnreadNotifications = countUnreadNotifications;
exports.deleteNotification = deleteNotification;
exports.markNotificationAsReadByRelatedId = markNotificationAsReadByRelatedId;
exports.deleteNotificationByRelatedId = deleteNotificationByRelatedId;
const prismaClient_1 = require("../prismaClient");
async function createNotification(data) {
    return prismaClient_1.prisma.notification.create({
        data,
    });
}
async function getNotifications(unreadOnly = false) {
    return prismaClient_1.prisma.notification.findMany({
        where: unreadOnly ? { isRead: false } : {},
        orderBy: { createdAt: 'desc' },
    });
}
async function markNotificationAsRead(id) {
    return prismaClient_1.prisma.notification.update({
        where: { id },
        data: { isRead: true },
    });
}
async function countUnreadNotifications() {
    return prismaClient_1.prisma.notification.count({
        where: { isRead: false },
    });
}
async function deleteNotification(id) {
    await prismaClient_1.prisma.notification.delete({
        where: { id },
    });
}
async function markNotificationAsReadByRelatedId(relatedId) {
    await prismaClient_1.prisma.notification.updateMany({
        where: { relatedId },
        data: { isRead: true },
    });
}
async function deleteNotificationByRelatedId(relatedId) {
    await prismaClient_1.prisma.notification.deleteMany({
        where: { relatedId },
    });
}
//# sourceMappingURL=notification.repository.js.map