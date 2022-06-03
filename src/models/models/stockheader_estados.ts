import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stockheader_estadosAttributes {
  id: number;
  codigo: number;
  descripcion: string;
}

export type stockheader_estadosPk = "id";
export type stockheader_estadosId = stockheader_estados[stockheader_estadosPk];
export type stockheader_estadosCreationAttributes = Optional<stockheader_estadosAttributes, stockheader_estadosPk>;

export class stockheader_estados extends Model<stockheader_estadosAttributes, stockheader_estadosCreationAttributes> implements stockheader_estadosAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof stockheader_estados {
    stockheader_estados.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stockheader_estados',
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
  return stockheader_estados;
  }
}
