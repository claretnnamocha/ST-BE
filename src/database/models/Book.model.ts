import { DataTypes, UUIDV4 } from 'sequelize';
import { Column, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'book',
  paranoid: true,
  timestamps: true,
})
export class Book extends Model {
  @IsUUID('4')
  @PrimaryKey
  @Column({
    defaultValue: UUIDV4,
    type: DataTypes.STRING,
  })
  public id: string;

  @Column({ type: DataTypes.STRING })
  public title: string;

  @Column({ type: DataTypes.STRING })
  public description: string;

  @Column({ type: DataTypes.STRING })
  public author: string;

  @Column({ type: DataTypes.STRING })
  public publicationYear: string;
}
