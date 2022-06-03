import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_unimedAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type afip_unimedPk = "id";
export type afip_unimedId = afip_unimed[afip_unimedPk];
export type afip_unimedCreationAttributes = Optional<afip_unimedAttributes, afip_unimedPk>;

export class afip_unimed extends Model<afip_unimedAttributes, afip_unimedCreationAttributes> implements afip_unimedAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_unimed {
    afip_unimed.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_unimed',
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
  return afip_unimed;
  }
}
