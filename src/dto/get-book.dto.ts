import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class GetBook {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
