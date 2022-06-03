import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_vencimientosAttributes {
  id: number;
  id_comprobante: number;
  vencimiento: string;
  importe?: number;
  observaciones: string;
}

export type ventas_vencimientosPk = "id";
export type ventas_vencimientosId = ventas_vencimientos[ventas_vencimientosPk];
export type ventas_vencimientosCreationAttributes = Optional<ventas_vencimientosAttributes, ventas_vencimientosPk>;

export class ventas_vencimientos extends Model<ventas_vencimientosAttributes, ventas_vencimientosCreationAttributes> implements ventas_vencimientosAttributes {
  id!: number;
  id_comprobante!: number;
  vencimiento!: string;
  importe?: number;
  observaciones!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_vencimientos {
    ventas_vencimientos.init({
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
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ventas_vencimientos',
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
        name: "ventas_vencimientos_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "ventas_vencimientos_vencimiento",
        using: "BTREE",
        fields: [
          { name: "vencimiento" },
        ]
      },
    ]
  });
  return ventas_vencimientos;
  }
}
