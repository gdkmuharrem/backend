import { Request, Response } from 'express';
import { IHeroModelService } from '../services/interfaces/IHeroModelService';
import fs from 'fs';

export function createHeroModelController(heroModelService: IHeroModelService) {
  return {
    upload: async (req: Request, res: Response) => {
      const heroId = req.params.heroId;
      if (!heroId) return res.status(400).json({ message: 'Hero ID parametresi eksik' });

      if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi' });

      try {
        const uploadedModel = await heroModelService.uploadHeroModel(heroId, req.file);
        res.status(201).json(uploadedModel);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Model yükleme başarısız' });
      }
    },

    getByHero: async (req: Request, res: Response) => {
      const heroId = req.params.heroId;
      if (!heroId) return res.status(400).json({ message: 'Hero ID parametresi eksik' });

      try {
        const models = await heroModelService.getModelsByHero(heroId);
        res.json(models);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Modeller alınamadı' });
      }
    },

    delete: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Model ID parametresi eksik' });

      try {
        const model = await heroModelService.getModelById(id);
        if (!model) return res.status(404).json({ message: 'Model bulunamadı' });

        fs.unlink(model.filePath, (err) => {
          if (err) console.error('Dosya silme hatası:', err);
        });

        await heroModelService.deleteModel(id);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Model silme başarısız' });
      }
    },
  };
}