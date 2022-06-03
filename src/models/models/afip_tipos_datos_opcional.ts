import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_tipos_datos_opcionalAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_tipos_datos_opcionalPk = "id";
export type afip_tipos_datos_opcionalId = afip_tipos_datos_opcional[afip_tipos_datos_opcionalPk];
export type afip_tipos_datos_opcionalCreationAttributes = Optional<afip_tipos_datos_opcionalAttributes, afip_tipos_datos_opcionalPk>;

export class afip_tipos_datos_opcional extends Model<afip_tipos_datos_opcionalAttributes, afip_tipos_datos_opcionalCreationAttributes> implements afip_tipos_datos_opcionalAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_tipos_datos_opcional {
    afip_tipos_datos_opcional.init({
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
    },
    fechadesde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fechahasta: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_tipos_datos_opcional',
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
  return afip_tipos_datos_opcional;
  }
}
