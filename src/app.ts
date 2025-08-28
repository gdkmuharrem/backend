import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route';
import contactRoutes from './routes/contact.route';
import notificationRoutes from './routes/notification.route';
import categoryRoutes from './routes/category.route';
import productRoutes from './routes/product.route';
import productImageRoutes from './routes/productImage.route';
import reviewRoutes from './routes/review.route';
import aboutRoutes from './routes/about.route';
import aboutImageRoutes from './routes/aboutImage.route';
import visionRoutes from './routes/vision.route';
import visionImageRoutes from './routes/visionImage.route';
import misionRoutes from './routes/mision.route';
import misionImageRoutes from './routes/misionImage.route';
import logRoutes from './routes/log.route';
import heroRoutes from './routes/hero.route';
import heroImageRoutes from './routes/heroImage.route';
import heroModelRoutes from './routes/heroModel.route';

import publicCategoryRoutes from './routes/public/public.category.route';
import publicProductRoutes from './routes/public/public.product.route';
import publicProductImageRoutes from './routes/public/public.productImage.route';
import publicAboutRoutes from './routes/public/public.about.routes';
import publicAboutImageRoutes from './routes/public/public.aboutImage.routes';
import publicMisionRoutes from './routes/public/public.mision.routes';
import publicMisionImageRoutes from './routes/public/public.misionImage.routes';
import publicVisionRoutes from './routes/public/public.vision.routes';
import publicVisionImageRoutes from './routes/public/public.visionImage.routes';
import publicContactRoutes from './routes/public/public.contact.routes';
import publicHeroRoutes from './routes/public/public.hero.route';
import publicHeroImageRoutes from './routes/public/public.heroImage.route';
import publicHeroModelRoutes from './routes/public/public.heroModel.route';

dotenv.config();

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false, // CORP başlığını kaldırıyor
    crossOriginEmbedderPolicy: false, // COEP başlığını kaldırıyor (isteğe bağlı)
  })
);

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:3000',
      process.env.ADMIN_URL || 'http://localhost:3001'
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Statik dosya servisi: uploads klasörünü erişilebilir kıl
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);
app.use('/notification', notificationRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/product-image', productImageRoutes);
app.use('/review', reviewRoutes);
app.use('/about', aboutRoutes);
app.use('/about-image', aboutImageRoutes);
app.use('/vision', visionRoutes);
app.use('/vision-image', visionImageRoutes);
app.use('/mision', misionRoutes);
app.use('/mision-image', misionImageRoutes);
app.use('/logs', logRoutes);
app.use('/hero', heroRoutes);
app.use('/hero-image', heroImageRoutes);
app.use('/hero-model', heroModelRoutes);

app.use('/categories/public', publicCategoryRoutes);
app.use('/products/public', publicProductRoutes);
app.use('/product-images/public', publicProductImageRoutes);
app.use('/abouts/public', publicAboutRoutes);
app.use('/about-images/public', publicAboutImageRoutes);
app.use('/misions/public', publicMisionRoutes);
app.use('/mision-images/public', publicMisionImageRoutes);
app.use('/visions/public', publicVisionRoutes);
app.use('/vision-images/public', publicVisionImageRoutes);
app.use('/contacts/public', publicContactRoutes);
app.use('/heros/public' , publicHeroRoutes);
app.use('/hero-images/public' , publicHeroImageRoutes);
app.use('/hero-models/public' , publicHeroModelRoutes);


app.get('/', (req, res) => {
  res.send('Mum ve Hediyelik Backend çalışıyor');
});

export default app;
