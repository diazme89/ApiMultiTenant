import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cierres_fiscalesAttributes {
  id: number;
  fecha?: string;
  numero_impresora?: number;
  tipo?: string;
  total?: number;
  iva_total?: number;
  detalle?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  terminal?: string;
  numero?: number;
}

export type cierres_fiscalesPk = "id";
export type cierres_fiscalesId = cierres_fiscales[cierres_fiscalesPk];
export type cierres_fiscalesCreationAttributes = Optional<cierres_fiscalesAttributes, cierres_fiscalesPk>;

export class cierres_fiscales extends Model<cierres_fiscalesAttributes, cierres_fiscalesCreationAttributes> implements cierres_fiscalesAttributes {
  id!: number;
  fecha?: string;
  numero_impresora?: number;
  tipo?: string;
  total?: number;
  iva_total?: number;
  detalle?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  terminal?: string;
  numero?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cierres_fiscales {
    cierres_fiscales.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero_impresora: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_total: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    terminal: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cierres_fiscales',
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
  return cierres_fiscales;
  }
}
