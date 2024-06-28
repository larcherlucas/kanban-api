import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize-client.js";

export class List extends Model {}

List.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
}, {
  sequelize,
  modelName: "List",
  tableName: "list"
});
