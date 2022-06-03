import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_cuitdestAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type afip_cuitdestPk = "id";
export type afip_cuitdestId = afip_cuitdest[afip_cuitdestPk];
export type afip_cuitdestCreationAttributes = Optional<afip_cuitdestAttributes, afip_cuitdestPk>;

export class afip_cuitdest extends Model<afip_cuitdestAttributes, afip_cuitdestCreationAttributes> implements afip_cuitdestAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_cuitdest {
    afip_cuitdest.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_cuitdest',
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
  return afip_cuitdest;
  }
}
