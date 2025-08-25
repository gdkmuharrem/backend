"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthController = createAuthController;
function createAuthController(authService) {
    return {
        login: async (req, res) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email ve parola zorunludur' });
            }
            try {
                const admin = await authService.validateAdmin(email, password);
                if (!admin) {
                    return res.status(401).json({ message: 'Geçersiz kimlik bilgileri' });
                }
                const token = authService.generateToken(admin.id);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 24 * 60 * 60 * 1000, // 1 gün
                });
                return res.json({ message: 'Giriş başarılı' });
            }
            catch (error) {
                return res.status(500).json({ message: error.message || 'Sunucu hatası' });
            }
        },
        logout: (req, res) => {
            res.clearCookie('token');
            return res.json({ message: 'Çıkış yapıldı' });
        },
        getMe: async (req, res) => {
            const adminId = req.adminId;
            if (!adminId) {
                return res.status(401).json({ message: 'Yetkilendirme hatası' });
            }
            const admin = await authService.getAdminById(adminId);
            if (!admin) {
                return res.status(404).json({ message: 'Admin bulunamadı' });
            }
            return res.json({ id: admin.id, email: admin.email, createdAt: admin.createdAt });
        },
        register: async (req, res) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email ve parola zorunludur' });
            }
            try {
                const newAdmin = await authService.registerAdmin(email, password);
                return res.status(201).json({ message: 'Admin oluşturuldu', adminId: newAdmin.id });
            }
            catch (error) {
                return res.status(400).json({ message: error.message || 'Kayıt sırasında hata oluştu' });
            }
        },
    };
}
//# sourceMappingURL=auth.controller.js.map