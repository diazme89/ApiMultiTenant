import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stock_headerAttributes {
  id: number;
  fecha?: string;
  cod_deposito?: number;
  cod_deposito_destino?: number;
  observacion?: string;
  nro_comprob_interdep?: number;
  nro_remito_interdep?: number;
  punto_de_venta?: number;
  cod_estado?: number;
  cod_movimiento?: number;
  anulada?: string;
}

export type stock_headerPk = "id";
export type stock_headerId = stock_header[stock_headerPk];
export type stock_headerCreationAttributes = Optional<stock_headerAttributes, stock_headerPk>;

export class stock_header extends Model<stock_headerAttributes, stock_headerCreationAttributes> implements stock_headerAttributes {
  id!: number;
  fecha?: string;
  cod_deposito?: number;
  cod_deposito_destino?: number;
  observacion?: string;
  nro_comprob_interdep?: number;
  nro_remito_interdep?: number;
  punto_de_venta?: number;
  cod_estado?: number;
  cod_movimiento?: number;
  anulada?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof stock_header {
    stock_header.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nro_comprob_interdep: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nro_remito_interdep: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_estado: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_movimiento: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    anulada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock_header',
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
  return stock_header;
  }
}
