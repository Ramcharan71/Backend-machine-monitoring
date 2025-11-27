import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class MachinesController {
  constructor(private machinesService: MachinesService) {}

  // apply guard manually since we didn't register it as provider in module imports
  @UseGuards(JwtAuthGuard)
  @Get('machines')
  getAll() {
    return this.machinesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('machines/:id')
  getOne(@Param('id') id: string) {
    const machine = this.machinesService.findOne(Number(id));
    return machine || { error: 'Not found' };
  }

  @UseGuards(JwtAuthGuard)
  @Post('machines/:id/update')
  update(@Param('id') id: string, @Body() body: any) {
    const updated = this.machinesService.update(Number(id), body);
    if (!updated) return { error: 'Not found' };
    return updated;
  }
}
