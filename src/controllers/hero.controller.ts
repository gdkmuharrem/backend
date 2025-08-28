import { Request, Response } from 'express';
import { IHeroService } from '../services/interfaces/IHeroService';

export function createHeroController(heroService: IHeroService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const hero = await heroService.createHero(req.body);
        res.status(201).json(hero);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hero oluşturulamadı' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const heroes = await heroService.getAllHeroes();
        res.json(heroes);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hero bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const hero = await heroService.getHeroById(req.params.id!);
        if (!hero) return res.status(404).json({ message: 'Hero bulunamadı' });
        res.json(hero);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    update: async (req: Request, res: Response) => {
      try {
        const updated = await heroService.updateHero(req.params.id!, req.body);
        res.json(updated);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Güncelleme başarısız' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await heroService.deleteHero(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },
  };
}