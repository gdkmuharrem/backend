import { IVisionImageService } from './interfaces/IVisionImageService';
import * as repo from '../repositories/visionImage.repository';
import { VisionImage } from '@prisma/client';
import path from 'path';

export class VisionImageService implements IVisionImageService {
  async uploadVisionImage(visionId: string, file: Express.Multer.File): Promise<VisionImage> {
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    return repo.createVisionImage({
      visionId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath,
    });
  }

  getImagesByVision(visionId: string): Promise<VisionImage[]> {
    return repo.getImagesByVision(visionId);
  }

  getImageById(id: string): Promise<VisionImage | null> {
    return repo.getImageById(id);
  }

  deleteImage(id: string): Promise<void> {
    return repo.deleteImage(id);
  }
}
