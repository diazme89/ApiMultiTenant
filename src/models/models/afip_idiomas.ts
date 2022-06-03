import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_idiomasAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
}

export type afip_idiomasPk = "id";
export type afip_idiomasId = afip_idiomas[afip_idiomasPk];
export type afip_idiomasCreationAttributes = Optional<afip_idiomasAttributes, afip_idiomasPk>;

export class afip_idiomas extends Model<afip_idiomasAttributes, afip_idiomasCreationAttributes> implements afip_idiomasAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_idiomas {
    afip_idiomas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_idiomas',
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
  return afip_idiomas;
  }
}
