import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_stockAttributes {
  fecha1?: string;
  fecha2?: string;
  cantidad?: number;
  ajuste?: string;
  motivo?: string;
  destino?: number;
  empresa?: string;
  ordenado?: string;
  id: number;
  usuario?: string;
  proveedor?: string;
  fecha_pago1?: string;
  fecha_pago2?: string;
  insumo?: string;
  remito_nro?: number;
}

export type filtro_stockPk = "id";
export type filtro_stockId = filtro_stock[filtro_stockPk];
export type filtro_stockCreationAttributes = Optional<filtro_stockAttributes, filtro_stockPk>;

export class filtro_stock extends Model<filtro_stockAttributes, filtro_stockCreationAttributes> implements filtro_stockAttributes {
  fecha1?: string;
  fecha2?: string;
  cantidad?: number;
  ajuste?: string;
  motivo?: string;
  destino?: number;
  empresa?: string;
  ordenado?: string;
  id!: number;
  usuario?: string;
  proveedor?: string;
  fecha_pago1?: string;
  fecha_pago2?: string;
  insumo?: string;
  remito_nro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_stock {
    filtro_stock.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ajuste: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    motivo: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    destino: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    empresa: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    ordenado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    fecha_pago1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_pago2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    insumo: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    remito_nro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_stock',
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
  return filtro_stock;
  }
}
