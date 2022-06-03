import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lotes_unidad_productivaAttributes {
  id: number;
  codigo_lote?: number;
  codigo_unidad_productiva: number;
}

export type lotes_unidad_productivaPk = "id";
export type lotes_unidad_productivaId = lotes_unidad_productiva[lotes_unidad_productivaPk];
export type lotes_unidad_productivaCreationAttributes = Optional<lotes_unidad_productivaAttributes, lotes_unidad_productivaPk>;

export class lotes_unidad_productiva extends Model<lotes_unidad_productivaAttributes, lotes_unidad_productivaCreationAttributes> implements lotes_unidad_productivaAttributes {
  id!: number;
  codigo_lote?: number;
  codigo_unidad_productiva!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof lotes_unidad_productiva {
    lotes_unidad_productiva.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo_lote: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    codigo_unidad_productiva: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lotes_unidad_productiva',
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
  return lotes_unidad_productiva;
  }
}
