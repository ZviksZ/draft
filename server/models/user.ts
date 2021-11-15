import { Table, Model, Column } from "sequelize-typescript";
import { UserAttributes } from "./interfaces";

@Table({
  timestamps: true,
})
export default class User extends Model<UserAttributes> {
  @Column
  name!: string;

  @Column
  email!: string;
}
