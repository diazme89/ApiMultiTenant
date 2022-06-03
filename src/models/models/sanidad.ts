import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sanidadAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type sanidadPk = "id";
export type sanidadId = sanidad[sanidadPk];
export type sanidadCreationAttributes = Optional<sanidadAttributes, sanidadPk>;

export class sanidad extends Model<sanidadAttributes, sanidadCreationAttributes> implements sanidadAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sanidad {
    sanidad.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sanidad',
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
  return sanidad;
  }
}
