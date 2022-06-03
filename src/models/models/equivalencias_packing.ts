import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface equivalencias_packingAttributes {
  id: number;
  concepto?: string;
  concepto_externo?: string;
}

export type equivalencias_packingPk = "id";
export type equivalencias_packingId = equivalencias_packing[equivalencias_packingPk];
export type equivalencias_packingCreationAttributes = Optional<equivalencias_packingAttributes, equivalencias_packingPk>;

export class equivalencias_packing extends Model<equivalencias_packingAttributes, equivalencias_packingCreationAttributes> implements equivalencias_packingAttributes {
  id!: number;
  concepto?: string;
  concepto_externo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof equivalencias_packing {
    equivalencias_packing.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    concepto: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    concepto_externo: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'equivalencias_packing',
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
  return equivalencias_packing;
  }
}
