import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_vencimientosAttributes {
  id: number;
  id_comprobante: number;
  vencimiento?: string;
  importe?: number;
  observaciones?: string;
}

export type compras_vencimientosPk = "id";
export type compras_vencimientosId = compras_vencimientos[compras_vencimientosPk];
export type compras_vencimientosCreationAttributes = Optional<compras_vencimientosAttributes, compras_vencimientosPk>;

export class compras_vencimientos extends Model<compras_vencimientosAttributes, compras_vencimientosCreationAttributes> implements compras_vencimientosAttributes {
  id!: number;
  id_comprobante!: number;
  vencimiento?: string;
  importe?: number;
  observaciones?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_vencimientos {
    compras_vencimientos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_vencimientos',
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
        name: "compras_vencimientos_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return compras_vencimientos;
  }
}
