import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_facturasAttributes {
  id: number;
  id_comprobante: number;
  importe_pagado?: number;
  detalle?: string;
  tipo_comprobante?: string;
  id_comprob_pagado?: number;
  punto_de_venta?: number;
  id_asiento?: number;
}

export type compras_facturasPk = "id";
export type compras_facturasId = compras_facturas[compras_facturasPk];
export type compras_facturasCreationAttributes = Optional<compras_facturasAttributes, compras_facturasPk>;

export class compras_facturas extends Model<compras_facturasAttributes, compras_facturasCreationAttributes> implements compras_facturasAttributes {
  id!: number;
  id_comprobante!: number;
  importe_pagado?: number;
  detalle?: string;
  tipo_comprobante?: string;
  id_comprob_pagado?: number;
  punto_de_venta?: number;
  id_asiento?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_facturas {
    compras_facturas.init({
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
    }
  }, {
    sequelize,
    tableName: 'compras_facturas',
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
        name: "compras_facturas_id_comprob_pagado",
        using: "BTREE",
        fields: [
          { name: "id_comprob_pagado" },
        ]
      },
      {
        name: "compras_facturas_id_comprobante",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "compras_facturas_xidasiento",
        using: "BTREE",
        fields: [
          { name: "id_asiento" },
        ]
      },
    ]
  });
  return compras_facturas;
  }
}
