import { Module } from '@nestjs/common';
import { MachinesController } from './machines.controller';
import { MachinesService } from './machines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  controllers: [MachinesController],
  providers: [MachinesService, JwtAuthGuard],
})
export class MachinesModule {}
