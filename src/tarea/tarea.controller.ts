import { Controller, Post, Req } from '@nestjs/common';
import { METHODS } from 'http';

export interface TareaIn{
readonly description: string;
readonly isDone: boolean;
}
@Controller('apli/v1/Tarea')
export class TareaController {
@Post()
METHODS(@Req() req: Request): string {
return 'method ${req.method}';
}
}