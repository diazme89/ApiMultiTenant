import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface nota_pedido_insumosAttributes {
  id: number;
  cantidad?: number;
  fecha_necesidad?: string;
  ejecutada?: string;
  observaciones?: string;
  id_nota_pedido?: number;
  incorporar_stock?: string;
  cod_insumo?: number;
  insumo_descripcion?: string;
  existencia?: number;
}

export type nota_pedido_insumosPk = "id";
export type nota_pedido_insumosId = nota_pedido_insumos[nota_pedido_insumosPk];
export type nota_pedido_insumosCreationAttributes = Optional<nota_pedido_insumosAttributes, nota_pedido_insumosPk>;

export class nota_pedido_insumos extends Model<nota_pedido_insumosAttributes, nota_pedido_insumosCreationAttributes> implements nota_pedido_insumosAttributes {
  id!: number;
  cantidad?: number;
  fecha_necesidad?: string;
  ejecutada?: string;
  observaciones?: string;
  id_nota_pedido?: number;
  incorporar_stock?: string;
  cod_insumo?: number;
  insumo_descripcion?: string;
  existencia?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof nota_pedido_insumos {
    nota_pedido_insumos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    fecha_necesidad: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ejecutada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_nota_pedido: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    incorporar_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    insumo_descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nota_pedido_insumos',
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
  return nota_pedido_insumos;
  }
}
