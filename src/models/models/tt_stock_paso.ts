import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_stock_pasoAttributes {
  id: number;
  idproc: number;
  cod_articulo: number;
  stock_entradas?: number;
  stock_salidas?: number;
  compras?: number;
  ventas?: number;
  fecha_alta?: Date;
  cod_deposito?: number;
}

export type tt_stock_pasoPk = "id";
export type tt_stock_pasoId = tt_stock_paso[tt_stock_pasoPk];
export type tt_stock_pasoCreationAttributes = Optional<tt_stock_pasoAttributes, tt_stock_pasoPk>;

export class tt_stock_paso extends Model<tt_stock_pasoAttributes, tt_stock_pasoCreationAttributes> implements tt_stock_pasoAttributes {
  id!: number;
  idproc!: number;
  cod_articulo!: number;
  stock_entradas?: number;
  stock_salidas?: number;
  compras?: number;
  ventas?: number;
  fecha_alta?: Date;
  cod_deposito?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_stock_paso {
    tt_stock_paso.init({
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
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_stock_paso',
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
        name: "i_stock_paso_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_stock_paso;
  }
}
