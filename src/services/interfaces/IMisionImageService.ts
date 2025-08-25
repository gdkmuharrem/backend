import { MisionImage } from '@prisma/client';

export interface IMisionImageService {
  uploadMisionImage(misionId: string, file: Express.Multer.File): Promise<MisionImage>;
  getImagesByMision(misionId: string): Promise<MisionImage[]>;
  getImageById(id: string): Promise<MisionImage | null>;
  deleteImage(id: string): Promise<void>;
}
