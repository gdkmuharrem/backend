import { Request, Response } from 'express';
import { IMisionService } from '../../services/interfaces/IMisionService';

export function createPublicMisionController(misionService: IMisionService) {
  return {
    getAll: async (_req: Request, res: Response) => {
      try {
        const misions = await misionService.getAllMisions();
        res.json(misions);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Misyon bilgileri alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'ID parametresi eksik' });

      try {
        const mision = await misionService.getMisionById(id);
        if (!mision) return res.status(404).json({ message: 'Misyon bulunamadı' });
        res.json(mision);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Misyon alınamadı' });
      }
    },
  };
}
