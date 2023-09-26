import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { BaseController } from './common';
import { CreateBook, EditBook, GetBook } from './dto';

@ApiTags('Misc')
@Controller()
export class AppController extends BaseController {
  constructor(private readonly appService: AppService) {
    super();
  }

  @Post('book')
  async createBook(@Res() response: Response, @Body() form: CreateBook) {
    const data = await this.appService.createBook(form);
    return this.response(response, data);
  }

  @Get('books')
  async getAllBooks(@Res() response: Response) {
    const data = await this.appService.getAllBooks();
    return this.response(response, data);
  }

  @Get('book')
  async getBook(@Res() response: Response, @Body() form: GetBook) {
    const data = await this.appService.getBook(form);
    return this.response(response, data);
  }

  @Patch('book')
  async updateBook(@Res() response: Response, @Body() form: EditBook) {
    const data = await this.appService.updateBook(form);
    return this.response(response, data);
  }

  @Delete('book')
  async deleteBook(@Res() response: Response, @Body() form: GetBook) {
    const data = await this.appService.deleteBook(form);
    return this.response(response, data);
  }
}
