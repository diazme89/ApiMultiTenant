import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_provinciasAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type afip_provinciasPk = "id";
export type afip_provinciasId = afip_provincias[afip_provinciasPk];
export type afip_provinciasCreationAttributes = Optional<afip_provinciasAttributes, afip_provinciasPk>;

export class afip_provincias extends Model<afip_provinciasAttributes, afip_provinciasCreationAttributes> implements afip_provinciasAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_provincias {
    afip_provincias.init({
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
    tableName: 'afip_provincias',
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
  return afip_provincias;
  }
}
