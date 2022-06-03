import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_existencias_stockAttributes {
  id: number;
  idproc: number;
  cod_articulo: number;
  descripcion?: string;
  cod_rubro?: number;
  stock_entradas?: number;
  stock_salidas?: number;
  compras?: number;
  ventas?: number;
  cod_subrubro?: number;
  pto_de_reposicion?: number;
  fecha_alta?: Date;
  cod_deposito?: number;
  existencia_anterior?: number;
}

export type tt_existencias_stockPk = "id";
export type tt_existencias_stockId = tt_existencias_stock[tt_existencias_stockPk];
export type tt_existencias_stockCreationAttributes = Optional<tt_existencias_stockAttributes, tt_existencias_stockPk>;

export class tt_existencias_stock extends Model<tt_existencias_stockAttributes, tt_existencias_stockCreationAttributes> implements tt_existencias_stockAttributes {
  id!: number;
  idproc!: number;
  cod_articulo!: number;
  descripcion?: string;
  cod_rubro?: number;
  stock_entradas?: number;
  stock_salidas?: number;
  compras?: number;
  ventas?: number;
  cod_subrubro?: number;
  pto_de_reposicion?: number;
  fecha_alta?: Date;
  cod_deposito?: number;
  existencia_anterior?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_existencias_stock {
    tt_existencias_stock.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    stock_entradas: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    stock_salidas: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    compras: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ventas: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    pto_de_reposicion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    existencia_anterior: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_existencias_stock',
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
        name: "tt_existencias_stock_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "tt_existencias_stock_cod",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_articulo" },
          { name: "cod_deposito" },
        ]
      },
    ]
  });
  return tt_existencias_stock;
  }
}
