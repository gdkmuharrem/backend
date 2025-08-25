import {
  ILogCreate,
  ILogService,
} from './interfaces/ILogService';
import * as logRepo from '../repositories/log.repository';

export class LogService implements ILogService {
  async createLog(data: ILogCreate) {
    return logRepo.createLog(data);
  }

  async getSummaryStats() {
    return logRepo.getSummaryStats();
  }

  async getTopPages() {
    return logRepo.getTopPages();
  }

  async getGeoStats() {
    return logRepo.getGeoStats();
  }

  async getTimelineStats(range: '7d' | '30d') {
    const endDate = new Date();
    const startDate = new Date();
    if (range === '7d') {
      startDate.setDate(endDate.getDate() - 7);
    } else {
      startDate.setDate(endDate.getDate() - 30);
    }
    return logRepo.getTimelineStats(startDate, endDate);
  }
}
