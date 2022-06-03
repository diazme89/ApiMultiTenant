import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_pagosAttributes {
  id: number;
  cod_cliente: number;
  importe?: number;
  cod_empresa?: number;
  tag?: string;
}

export type clientes_pagosPk = "id";
export type clientes_pagosId = clientes_pagos[clientes_pagosPk];
export type clientes_pagosCreationAttributes = Optional<clientes_pagosAttributes, clientes_pagosPk>;

export class clientes_pagos extends Model<clientes_pagosAttributes, clientes_pagosCreationAttributes> implements clientes_pagosAttributes {
  id!: number;
  cod_cliente!: number;
  importe?: number;
  cod_empresa?: number;
  tag?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_pagos {
    clientes_pagos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
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
    tableName: 'clientes_pagos',
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
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return clientes_pagos;
  }
}
