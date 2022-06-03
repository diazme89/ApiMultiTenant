import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_facturasAttributes {
  id: number;
  id_comprobante: number;
  importe_pagado?: number;
  detalle?: string;
  tipo_comprobante?: string;
  id_comprob_pagado?: number;
  punto_de_venta?: number;
  id_asiento?: number;
  circuito?: string;
}

export type ventas_facturasPk = "id";
export type ventas_facturasId = ventas_facturas[ventas_facturasPk];
export type ventas_facturasCreationAttributes = Optional<ventas_facturasAttributes, ventas_facturasPk>;

export class ventas_facturas extends Model<ventas_facturasAttributes, ventas_facturasCreationAttributes> implements ventas_facturasAttributes {
  id!: number;
  id_comprobante!: number;
  importe_pagado?: number;
  detalle?: string;
  tipo_comprobante?: string;
  id_comprob_pagado?: number;
  punto_de_venta?: number;
  id_asiento?: number;
  circuito?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_facturas {
    ventas_facturas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    importe_pagado: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    id_comprob_pagado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    id_asiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_facturas',
    hasTrigger: true,
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
        name: "ventas_facturas_id_comprob_pagado",
        using: "BTREE",
        fields: [
          { name: "id_comprob_pagado" },
        ]
      },
      {
        name: "ventas_facturas_id_comprobante",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
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
        name: "ventas_facturas_xidasiento",
        using: "BTREE",
        fields: [
          { name: "id_asiento" },
        ]
      },
      {
        name: "idx_ventas_facturas_xcircuito",
        using: "BTREE",
        fields: [
          { name: "circuito" },
        ]
      },
      {
        name: "idx_ventas_facturas_xid_comprob_circuito",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
          { name: "circuito" },
        ]
      },
    ]
  });
  return ventas_facturas;
  }
}
