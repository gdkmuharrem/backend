"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = createProduct;
exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getProductsByCategory = getProductsByCategory;
exports.searchProducts = searchProducts;
exports.paginateProducts = paginateProducts;
exports.bulkDeleteProducts = bulkDeleteProducts;
const prismaClient_1 = require("../prismaClient");
// CREATE
function createProduct(data) {
    return prismaClient_1.prisma.product.create({
        data: {
            name_tr: data.name_tr,
            name_en: data.name_en,
            price: data.price,
            categoryId: data.categoryId,
            isActive: data.isActive ?? true,
            description_tr: data.description_tr ?? null,
            description_en: data.description_en ?? null,
        },
    });
}
// READ ALL
function getAllProducts() {
    return prismaClient_1.prisma.product.findMany({
        include: {
            category: true,
            images: true,
        },
        orderBy: { createdAt: 'desc' },
    });
}
// READ ONE
function getProductById(id) {
    return prismaClient_1.prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
            images: true,
        },
    });
}
// UPDATE
function updateProduct(id, data) {
    const updateData = {};
    if (data.name_tr !== undefined)
        updateData.name_tr = data.name_tr;
    if (data.name_en !== undefined)
        updateData.name_en = data.name_en;
    if (data.price !== undefined)
        updateData.price = data.price;
    if (data.categoryId !== undefined)
        updateData.categoryId = data.categoryId;
    if (data.isActive !== undefined)
        updateData.isActive = data.isActive;
    updateData.description_tr = data.description_tr ?? null;
    updateData.description_en = data.description_en ?? null;
    return prismaClient_1.prisma.product.update({
        where: { id },
        data: updateData,
    });
}
// DELETE
function deleteProduct(id) {
    return prismaClient_1.prisma.product.delete({ where: { id } }).then(() => { });
}
// GET BY CATEGORY
function getProductsByCategory(categoryId) {
    return prismaClient_1.prisma.product.findMany({
        where: { categoryId },
        include: { category: true, images: true },
        orderBy: { createdAt: 'desc' },
    });
}
// SEARCH
function searchProducts(keyword) {
    return prismaClient_1.prisma.product.findMany({
        where: {
            OR: [
                { name_tr: { contains: keyword, mode: 'insensitive' } },
                { name_en: { contains: keyword, mode: 'insensitive' } },
                { description_tr: { contains: keyword, mode: 'insensitive' } },
                { description_en: { contains: keyword, mode: 'insensitive' } },
            ],
        },
        include: { category: true, images: true },
        orderBy: { createdAt: 'desc' },
    });
}
// PAGINATION
async function paginateProducts(page, pageSize) {
    const total = await prismaClient_1.prisma.product.count();
    const products = await prismaClient_1.prisma.product.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: { category: true, images: true },
        orderBy: { createdAt: 'desc' },
    });
    return { total, products };
}
// BULK DELETE
function bulkDeleteProducts(ids) {
    return prismaClient_1.prisma.product.deleteMany({
        where: { id: { in: ids } },
    }).then(() => { });
}
//# sourceMappingURL=product.repository.js.map