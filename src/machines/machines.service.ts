import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const DATA_PATH = path.join(__dirname, 'data.json');

@Injectable()
export class MachinesService {
  private machines: any[];

  constructor() {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    this.machines = JSON.parse(raw);
  }

  findAll() {
    return this.machines;
  }

  findOne(id: number) {
    return this.machines.find((m) => m.id === id);
  }

  update(id: number, payload: { temperature?: number; energyConsumption?: number }) {
    const m = this.findOne(id);
    if (!m) return null;
    if (payload.temperature !== undefined) {
      m.temperature = payload.temperature;
      m.temperatureHistory = [...(m.temperatureHistory || []).slice(-10), payload.temperature];
    }
    if (payload.energyConsumption !== undefined) {
      m.energyConsumption = payload.energyConsumption;
    }
    return m;
  }
}
