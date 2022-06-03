import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_produccionAttributes {
  id: number;
  id_compras: number;
  id_produccion: number;
  monto?: number;
  origen: string;
}

export type compras_produccionPk = "id";
export type compras_produccionId = compras_produccion[compras_produccionPk];
export type compras_produccionCreationAttributes = Optional<compras_produccionAttributes, compras_produccionPk>;

export class compras_produccion extends Model<compras_produccionAttributes, compras_produccionCreationAttributes> implements compras_produccionAttributes {
  id!: number;
  id_compras!: number;
  id_produccion!: number;
  monto?: number;
  origen!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_produccion {
    compras_produccion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_produccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    origen: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'compras_produccion',
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
        name: "compras_produccion_idx1",
        using: "BTREE",
        fields: [
          { name: "id_compras" },
          { name: "origen" },
        ]
      },
      {
        name: "compras_produccion_idx2",
        using: "BTREE",
        fields: [
          { name: "id_produccion" },
          { name: "origen" },
        ]
      },
    ]
  });
  return compras_produccion;
  }
}
