import { IMisionImageService } from './interfaces/IMisionImageService';
import * as repo from '../repositories/misionImage.repository';
import { MisionImage } from '@prisma/client';
import path from 'path';

export class MisionImageService implements IMisionImageService {
  async uploadMisionImage(misionId: string, file: Express.Multer.File): Promise<MisionImage> {
    const relativePath = path.relative(process.cwd(), file.path).replace(/\\/g, '/');
    return repo.createMisionImage({
      misionId,
      originalName: file.originalname,
      storedName: file.filename,
      filePath: relativePath,
    });
  }

  getImagesByMision(misionId: string): Promise<MisionImage[]> {
    return repo.getImagesByMision(misionId);
  }

  getImageById(id: string): Promise<MisionImage | null> {
    return repo.getImageById(id);
  }

  deleteImage(id: string): Promise<void> {
    return repo.deleteImage(id);
  }
}
