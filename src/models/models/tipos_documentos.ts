import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipos_documentosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_afip?: number;
}

export type tipos_documentosPk = "id";
export type tipos_documentosId = tipos_documentos[tipos_documentosPk];
export type tipos_documentosCreationAttributes = Optional<tipos_documentosAttributes, tipos_documentosPk>;

export class tipos_documentos extends Model<tipos_documentosAttributes, tipos_documentosCreationAttributes> implements tipos_documentosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_afip?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipos_documentos {
    tipos_documentos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_afip: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipos_documentos',
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
  return tipos_documentos;
  }
}
