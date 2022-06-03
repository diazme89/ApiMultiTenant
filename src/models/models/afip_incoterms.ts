import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_incotermsAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
}

export type afip_incotermsPk = "id";
export type afip_incotermsId = afip_incoterms[afip_incotermsPk];
export type afip_incotermsCreationAttributes = Optional<afip_incotermsAttributes, afip_incotermsPk>;

export class afip_incoterms extends Model<afip_incotermsAttributes, afip_incotermsCreationAttributes> implements afip_incotermsAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_incoterms {
    afip_incoterms.init({
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
    tableName: 'afip_incoterms',
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
  return afip_incoterms;
  }
}
