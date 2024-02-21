import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({  
 imports: [],
 controllers: [TareaController],
 providers: [TareaService]
 ,})
export class TareaModule {}
