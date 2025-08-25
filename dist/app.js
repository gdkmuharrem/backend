"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const contact_route_1 = __importDefault(require("./routes/contact.route"));
const notification_route_1 = __importDefault(require("./routes/notification.route"));
const category_route_1 = __importDefault(require("./routes/category.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const productImage_route_1 = __importDefault(require("./routes/productImage.route"));
const review_route_1 = __importDefault(require("./routes/review.route"));
const about_route_1 = __importDefault(require("./routes/about.route"));
const aboutImage_route_1 = __importDefault(require("./routes/aboutImage.route"));
const vision_route_1 = __importDefault(require("./routes/vision.route"));
const visionImage_route_1 = __importDefault(require("./routes/visionImage.route"));
const mision_route_1 = __importDefault(require("./routes/mision.route"));
const misionImage_route_1 = __importDefault(require("./routes/misionImage.route"));
const log_route_1 = __importDefault(require("./routes/log.route"));
const public_category_route_1 = __importDefault(require("./routes/public/public.category.route"));
const public_product_route_1 = __importDefault(require("./routes/public/public.product.route"));
const public_productImage_route_1 = __importDefault(require("./routes/public/public.productImage.route"));
const public_about_routes_1 = __importDefault(require("./routes/public/public.about.routes"));
const public_aboutImage_routes_1 = __importDefault(require("./routes/public/public.aboutImage.routes"));
const public_mision_routes_1 = __importDefault(require("./routes/public/public.mision.routes"));
const public_misionImage_routes_1 = __importDefault(require("./routes/public/public.misionImage.routes"));
const public_vision_routes_1 = __importDefault(require("./routes/public/public.vision.routes"));
const public_visionImage_routes_1 = __importDefault(require("./routes/public/public.visionImage.routes"));
const public_contact_routes_1 = __importDefault(require("./routes/public/public.contact.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: false, // CORP başlığını kaldırıyor
    crossOriginEmbedderPolicy: false, // COEP başlığını kaldırıyor (isteğe bağlı)
}));
app.use((0, cors_1.default)({
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:3000',
        process.env.ADMIN_URL || 'http://localhost:3001'
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Statik dosya servisi: uploads klasörünü erişilebilir kıl
app.use('/uploads', express_1.default.static(path_1.default.join(process.cwd(), 'uploads')));
app.use('/auth', auth_route_1.default);
app.use('/contact', contact_route_1.default);
app.use('/notification', notification_route_1.default);
app.use('/category', category_route_1.default);
app.use('/product', product_route_1.default);
app.use('/product-image', productImage_route_1.default);
app.use('/review', review_route_1.default);
app.use('/about', about_route_1.default);
app.use('/about-image', aboutImage_route_1.default);
app.use('/vision', vision_route_1.default);
app.use('/vision-image', visionImage_route_1.default);
app.use('/mision', mision_route_1.default);
app.use('/mision-image', misionImage_route_1.default);
app.use('/logs', log_route_1.default);
app.use('/categories/public', public_category_route_1.default);
app.use('/products/public', public_product_route_1.default);
app.use('/product-images/public', public_productImage_route_1.default);
app.use('/abouts/public', public_about_routes_1.default);
app.use('/about-images/public', public_aboutImage_routes_1.default);
app.use('/misions/public', public_mision_routes_1.default);
app.use('/mision-images/public', public_misionImage_routes_1.default);
app.use('/visions/public', public_vision_routes_1.default);
app.use('/vision-images/public', public_visionImage_routes_1.default);
app.use('/contacts/public', public_contact_routes_1.default);
app.get('/', (req, res) => {
    res.send('Mum ve Hediyelik Backend çalışıyor');
});
exports.default = app;
//# sourceMappingURL=app.js.map