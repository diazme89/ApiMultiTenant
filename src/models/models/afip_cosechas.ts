import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_cosechasAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
}

export type afip_cosechasPk = "id";
export type afip_cosechasId = afip_cosechas[afip_cosechasPk];
export type afip_cosechasCreationAttributes = Optional<afip_cosechasAttributes, afip_cosechasPk>;

export class afip_cosechas extends Model<afip_cosechasAttributes, afip_cosechasCreationAttributes> implements afip_cosechasAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_cosechas {
    afip_cosechas.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_cosechas',
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
  return afip_cosechas;
  }
}
