import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedores_pagosAttributes {
  id: number;
  cod_proveedor: number;
  importe?: number;
  cod_empresa?: number;
  tag?: string;
}

export type proveedores_pagosPk = "id";
export type proveedores_pagosId = proveedores_pagos[proveedores_pagosPk];
export type proveedores_pagosCreationAttributes = Optional<proveedores_pagosAttributes, proveedores_pagosPk>;

export class proveedores_pagos extends Model<proveedores_pagosAttributes, proveedores_pagosCreationAttributes> implements proveedores_pagosAttributes {
  id!: number;
  cod_proveedor!: number;
  importe?: number;
  cod_empresa?: number;
  tag?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedores_pagos {
    proveedores_pagos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedores_pagos',
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
  return proveedores_pagos;
  }
}
