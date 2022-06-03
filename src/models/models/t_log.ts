import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_logAttributes {
  id: number;
  fecha?: Date;
  detalle?: string;
}

export type t_logPk = "id";
export type t_logId = t_log[t_logPk];
export type t_logCreationAttributes = Optional<t_logAttributes, t_logPk>;

export class t_log extends Model<t_logAttributes, t_logCreationAttributes> implements t_logAttributes {
  id!: number;
  fecha?: Date;
  detalle?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_log {
    t_log.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    detalle: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return t_log;
  }
}
