import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseService, MESSAGES } from './common';
import { EmailService } from './common/email.service';
import { ServiceResponse } from './common/interfaces';
import { CreateBook, EditBook, GetBook } from './dto';
import { Book } from './database/models';

@Injectable()
export class AppService extends BaseService {
  async createBook(payload: CreateBook): Promise<ServiceResponse> {
    try {
      await Book.create({ ...payload });
      return {
        statusCode: HttpStatus.CREATED,
        message: [MESSAGES.DATA_CREATED('Book')],
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getBook(payload: GetBook): Promise<ServiceResponse> {
    try {
      const { id } = payload;

      const book = await Book.findOne({ where: { id, deletedAt: null } });

      if (!book)
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: [MESSAGES.RECORD_NOT_FOUND('Book')],
        };

      return {
        statusCode: HttpStatus.OK,
        message: [MESSAGES.DATA_RETRIEVED('Book details')],
        data: book,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async deleteBook(payload: GetBook): Promise<ServiceResponse> {
    try {
      const { id } = payload;

      const book = await Book.findOne({ where: { id, deletedAt: null } });

      if (!book)
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: [MESSAGES.RECORD_NOT_FOUND('Book')],
        };

      await book.destroy();
      return {
        statusCode: HttpStatus.OK,
        message: ['Book deleted'],
        data: book,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getAllBooks(): Promise<ServiceResponse> {
    try {
      const books = await Book.findAll({ where: { deleteAt: null } });

      return {
        statusCode: HttpStatus.OK,
        message: [MESSAGES.DATA_RETRIEVED('Books')],
        data: books,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async updateBook(payload: EditBook): Promise<ServiceResponse> {
    try {
      const { author, description, id, publicationYear, title } = payload;

      const book = await Book.findOne({ where: { id, deletedAt: null } });

      if (!book)
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: [MESSAGES.RECORD_NOT_FOUND('Book')],
        };

      let update: any = {};
      if (author) {
        update = { ...update, author };
      }

      if (description) {
        update = { ...update, description };
      }

      if (publicationYear) {
        update = { ...update, publicationYear };
      }

      if (title) {
        update = { ...update, title };
      }

      await book.update(update);

      return {
        statusCode: HttpStatus.OK,
        message: ['Book updated'],
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
