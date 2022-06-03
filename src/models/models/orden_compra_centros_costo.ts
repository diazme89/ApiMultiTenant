import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orden_compra_centros_costoAttributes {
  id: number;
  centro_costo?: number;
  imputacion_contable?: string;
  importe?: number;
  id_orden_compra?: number;
}

export type orden_compra_centros_costoPk = "id";
export type orden_compra_centros_costoId = orden_compra_centros_costo[orden_compra_centros_costoPk];
export type orden_compra_centros_costoCreationAttributes = Optional<orden_compra_centros_costoAttributes, orden_compra_centros_costoPk>;

export class orden_compra_centros_costo extends Model<orden_compra_centros_costoAttributes, orden_compra_centros_costoCreationAttributes> implements orden_compra_centros_costoAttributes {
  id!: number;
  centro_costo?: number;
  imputacion_contable?: string;
  importe?: number;
  id_orden_compra?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof orden_compra_centros_costo {
    orden_compra_centros_costo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    centro_costo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    imputacion_contable: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    id_orden_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_compra_centros_costo',
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
  return orden_compra_centros_costo;
  }
}
