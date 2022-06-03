import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipo_movAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  grupo?: string;
}

export type tipo_movPk = "id";
export type tipo_movId = tipo_mov[tipo_movPk];
export type tipo_movCreationAttributes = Optional<tipo_movAttributes, tipo_movPk>;

export class tipo_mov extends Model<tipo_movAttributes, tipo_movCreationAttributes> implements tipo_movAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  grupo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_mov {
    tipo_mov.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    grupo: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_mov',
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
      {
        name: "tipo_movxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return tipo_mov;
  }
}
