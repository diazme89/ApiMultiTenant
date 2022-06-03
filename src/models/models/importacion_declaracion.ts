import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface importacion_declaracionAttributes {
  id: number;
  codigo: number;
  descripcion?: string;
  predefinido?: string;
}

export type importacion_declaracionPk = "id";
export type importacion_declaracionId = importacion_declaracion[importacion_declaracionPk];
export type importacion_declaracionCreationAttributes = Optional<importacion_declaracionAttributes, importacion_declaracionPk>;

export class importacion_declaracion extends Model<importacion_declaracionAttributes, importacion_declaracionCreationAttributes> implements importacion_declaracionAttributes {
  id!: number;
  codigo!: number;
  descripcion?: string;
  predefinido?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof importacion_declaracion {
    importacion_declaracion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    predefinido: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'importacion_declaracion',
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
      {
        name: "idx_importacion_dec",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return importacion_declaracion;
  }
}
