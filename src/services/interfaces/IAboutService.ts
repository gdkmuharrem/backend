import { About } from '@prisma/client';
import { AboutInput } from '../../validators/about.validator';

export interface IAboutService {
  createAbout(data: AboutInput): Promise<About>;
  getAllAbouts(): Promise<About[]>;
  getAboutById(id: string): Promise<About | null>;
  updateAbout(id: string, data: Partial<AboutInput>): Promise<About>;
  deleteAbout(id: string): Promise<void>;
}
