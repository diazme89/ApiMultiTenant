import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_laboresAttributes {
  id: number;
  id_compras: number;
  id_labores: number;
  monto?: number;
}

export type compras_laboresPk = "id";
export type compras_laboresId = compras_labores[compras_laboresPk];
export type compras_laboresCreationAttributes = Optional<compras_laboresAttributes, compras_laboresPk>;

export class compras_labores extends Model<compras_laboresAttributes, compras_laboresCreationAttributes> implements compras_laboresAttributes {
  id!: number;
  id_compras!: number;
  id_labores!: number;
  monto?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_labores {
    compras_labores.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_labores',
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
        name: "compras_labores_idx1",
        using: "BTREE",
        fields: [
          { name: "id_compras" },
        ]
      },
      {
        name: "compras_labores_idx2",
        using: "BTREE",
        fields: [
          { name: "id_labores" },
        ]
      },
    ]
  });
  return compras_labores;
  }
}
