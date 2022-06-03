import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impresoras_fiscalesAttributes {
  id: number;
  numero?: number;
  codigo?: number;
  descripcion?: string;
  predeterminada?: number;
}

export type impresoras_fiscalesPk = "id";
export type impresoras_fiscalesId = impresoras_fiscales[impresoras_fiscalesPk];
export type impresoras_fiscalesCreationAttributes = Optional<impresoras_fiscalesAttributes, impresoras_fiscalesPk>;

export class impresoras_fiscales extends Model<impresoras_fiscalesAttributes, impresoras_fiscalesCreationAttributes> implements impresoras_fiscalesAttributes {
  id!: number;
  numero?: number;
  codigo?: number;
  descripcion?: string;
  predeterminada?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impresoras_fiscales {
    impresoras_fiscales.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    predeterminada: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impresoras_fiscales',
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
  return impresoras_fiscales;
  }
}
