import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_remitos_facturasAttributes {
  id: number;
  id_remito: number;
  id_factura: number;
  cod_articulo: number;
  cantidad: number;
}

export type ventas_remitos_facturasPk = "id";
export type ventas_remitos_facturasId = ventas_remitos_facturas[ventas_remitos_facturasPk];
export type ventas_remitos_facturasCreationAttributes = Optional<ventas_remitos_facturasAttributes, ventas_remitos_facturasPk>;

export class ventas_remitos_facturas extends Model<ventas_remitos_facturasAttributes, ventas_remitos_facturasCreationAttributes> implements ventas_remitos_facturasAttributes {
  id!: number;
  id_remito!: number;
  id_factura!: number;
  cod_articulo!: number;
  cantidad!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_remitos_facturas {
    ventas_remitos_facturas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_remito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_factura: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ventas_remitos_facturas',
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
        name: "ventas_remitos_facturas_idx1",
        using: "BTREE",
        fields: [
          { name: "id_factura" },
        ]
      },
      {
        name: "ventas_remitos_facturas_idx2",
        using: "BTREE",
        fields: [
          { name: "id_remito" },
        ]
      },
    ]
  });
  return ventas_remitos_facturas;
  }
}
