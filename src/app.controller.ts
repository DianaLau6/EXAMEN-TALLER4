import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('Api/v1/Tare')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Terminado de Diana Laura Velasco' };
  }
}

