import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedor_impuestosAttributes {
  id: number;
  cod_impuesto?: number;
  cod_proveedor?: number;
  cod_formula?: number;
  alicuota?: number;
  fecha?: string;
  categoria?: string;
  nro_convenio?: string;
}

export type proveedor_impuestosPk = "id";
export type proveedor_impuestosId = proveedor_impuestos[proveedor_impuestosPk];
export type proveedor_impuestosCreationAttributes = Optional<proveedor_impuestosAttributes, proveedor_impuestosPk>;

export class proveedor_impuestos extends Model<proveedor_impuestosAttributes, proveedor_impuestosCreationAttributes> implements proveedor_impuestosAttributes {
  id!: number;
  cod_impuesto?: number;
  cod_proveedor?: number;
  cod_formula?: number;
  alicuota?: number;
  fecha?: string;
  categoria?: string;
  nro_convenio?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedor_impuestos {
    proveedor_impuestos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_impuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_formula: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    categoria: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nro_convenio: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedor_impuestos',
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
  return proveedor_impuestos;
  }
}
