import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface nota_pedidoAttributes {
  id: number;
  fecha?: string;
  numero?: number;
  cod_personal?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  cod_deposito?: number;
  cod_periodo?: number;
}

export type nota_pedidoPk = "id";
export type nota_pedidoId = nota_pedido[nota_pedidoPk];
export type nota_pedidoCreationAttributes = Optional<nota_pedidoAttributes, nota_pedidoPk>;

export class nota_pedido extends Model<nota_pedidoAttributes, nota_pedidoCreationAttributes> implements nota_pedidoAttributes {
  id!: number;
  fecha?: string;
  numero?: number;
  cod_personal?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  cod_deposito?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof nota_pedido {
    nota_pedido.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_personal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nota_pedido',
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
  return nota_pedido;
  }
}
