import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orden_compra_insumosAttributes {
  id: number;
  id_orden_compra?: number;
  cantidad?: number;
  precio?: number;
  iva?: number;
  observacion?: string;
  cod_insumo?: number;
  insumo_descripcion?: string;
}

export type orden_compra_insumosPk = "id";
export type orden_compra_insumosId = orden_compra_insumos[orden_compra_insumosPk];
export type orden_compra_insumosCreationAttributes = Optional<orden_compra_insumosAttributes, orden_compra_insumosPk>;

export class orden_compra_insumos extends Model<orden_compra_insumosAttributes, orden_compra_insumosCreationAttributes> implements orden_compra_insumosAttributes {
  id!: number;
  id_orden_compra?: number;
  cantidad?: number;
  precio?: number;
  iva?: number;
  observacion?: string;
  cod_insumo?: number;
  insumo_descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof orden_compra_insumos {
    orden_compra_insumos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_orden_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    observacion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    insumo_descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_compra_insumos',
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
  return orden_compra_insumos;
  }
}
