import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stockAttributes {
  id: number;
  fecha?: string;
  cod_deposito?: number;
  cod_articulo?: number;
  cantidad?: number;
  tipo?: string;
  observacion?: string;
  fecha_carga?: string;
  hora_carga?: string;
  usuario?: string;
  id_header?: number;
  id_stock_header?: number;
}

export type stockPk = "id";
export type stockId = stock[stockPk];
export type stockCreationAttributes = Optional<stockAttributes, stockPk>;

export class stock extends Model<stockAttributes, stockCreationAttributes> implements stockAttributes {
  id!: number;
  fecha?: string;
  cod_deposito?: number;
  cod_articulo?: number;
  cantidad?: number;
  tipo?: string;
  observacion?: string;
  fecha_carga?: string;
  hora_carga?: string;
  usuario?: string;
  id_header?: number;
  id_stock_header?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof stock {
    stock.init({
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
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    id_header: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_stock_header: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock',
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
        name: "stock_cod_articulo",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "stock_cod_deposito",
        using: "BTREE",
        fields: [
          { name: "cod_deposito" },
        ]
      },
      {
        name: "stock_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "stock_articulo_deposito",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
          { name: "cod_deposito" },
        ]
      },
    ]
  });
  return stock;
  }
}
