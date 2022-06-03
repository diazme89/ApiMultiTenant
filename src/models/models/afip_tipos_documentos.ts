import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_tipos_documentosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_tipos_documentosPk = "id";
export type afip_tipos_documentosId = afip_tipos_documentos[afip_tipos_documentosPk];
export type afip_tipos_documentosCreationAttributes = Optional<afip_tipos_documentosAttributes, afip_tipos_documentosPk>;

export class afip_tipos_documentos extends Model<afip_tipos_documentosAttributes, afip_tipos_documentosCreationAttributes> implements afip_tipos_documentosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_tipos_documentos {
    afip_tipos_documentos.init({
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
    tableName: 'afip_tipos_documentos',
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
  return afip_tipos_documentos;
  }
}
