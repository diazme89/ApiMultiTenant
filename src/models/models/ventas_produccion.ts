import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_produccionAttributes {
  id: number;
  id_comprobante: number;
  id_produccion: number;
  peso: number;
}

export type ventas_produccionPk = "id";
export type ventas_produccionId = ventas_produccion[ventas_produccionPk];
export type ventas_produccionCreationAttributes = Optional<ventas_produccionAttributes, ventas_produccionPk>;

export class ventas_produccion extends Model<ventas_produccionAttributes, ventas_produccionCreationAttributes> implements ventas_produccionAttributes {
  id!: number;
  id_comprobante!: number;
  id_produccion!: number;
  peso!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_produccion {
    ventas_produccion.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_produccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    peso: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ventas_produccion',
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
        name: "ventas_items_key1",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "ventas_items_key2",
        using: "BTREE",
        fields: [
          { name: "id_produccion" },
        ]
      },
    ]
  });
  return ventas_produccion;
  }
}
