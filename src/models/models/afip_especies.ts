import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_especiesAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type afip_especiesPk = "id";
export type afip_especiesId = afip_especies[afip_especiesPk];
export type afip_especiesCreationAttributes = Optional<afip_especiesAttributes, afip_especiesPk>;

export class afip_especies extends Model<afip_especiesAttributes, afip_especiesCreationAttributes> implements afip_especiesAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_especies {
    afip_especies.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_especies',
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
  return afip_especies;
  }
}
