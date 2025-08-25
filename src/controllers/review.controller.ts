import { Request, Response } from 'express';
import { IReviewService } from '../services/interfaces/IReviewService';

export function createReviewController(reviewService: IReviewService) {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const review = await reviewService.createReview(req.body);
        res.status(201).json(review);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Yorum kaydedilemedi' });
      }
    },

    getAll: async (_req: Request, res: Response) => {
      try {
        const reviews = await reviewService.getAllReviews();
        res.json(reviews);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Yorumlar alınamadı' });
      }
    },

    getById: async (req: Request, res: Response) => {
      try {
        const review = await reviewService.getReviewById(req.params.id!);
        if (!review) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(review);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Hata oluştu' });
      }
    },

    delete: async (req: Request, res: Response) => {
      try {
        await reviewService.deleteReview(req.params.id!);
        res.status(204).send();
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Silme işlemi başarısız' });
      }
    },

    approveToggle: async (req: Request, res: Response) => {
      try {
        const { approved } = req.body;
        if (typeof approved !== 'boolean') {
          return res.status(400).json({ message: 'approved alanı boolean olmalı' });
        }
        const review = await reviewService.updateApproval(req.params.id!, approved);
        res.json(review);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Onay durumu güncellenemedi' });
      }
    },

    markAsRead: async (req: Request, res: Response) => {
      try {
        const review = await reviewService.markAsRead(req.params.id!);
        if (!review) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(review);
      } catch (error: any) {
        res.status(500).json({ message: error.message || 'Okundu bilgisi güncellenemedi' });
      }
    },
  };
}
