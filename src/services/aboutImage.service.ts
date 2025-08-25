import { IAboutImageService } from './interfaces/IAboutImageService';
import * as repo from '../repositories/aboutImage.repository';
import { AboutImage } from '@prisma/client';
import path from 'path';

export class AboutImageService implements IAboutImageService {
  async uploadAboutImage(aboutId: string, file: Express.Multer.File): Promise<AboutImage> {
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    return repo.createAboutImage({
      aboutId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath,
    });
  }

  getImagesByAbout(aboutId: string): Promise<AboutImage[]> {
    return repo.getImagesByAbout(aboutId);
  }

  getImageById(id: string): Promise<AboutImage | null> {
    return repo.getImageById(id);
  }

  deleteImage(id: string): Promise<void> {
    return repo.deleteImage(id);
  }
}
