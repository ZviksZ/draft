import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
export class Person extends Model {
  @Column
  name: string;

  @Column
  birthday: Date;
}
