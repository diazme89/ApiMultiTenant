import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface localidadAttributes {
  id: number;
  codigo: number;
  nombre: string;
  cod_provincia: number;
  cod_afip_localidad?: number;
  cod_postal?: string;
}

export type localidadPk = "id";
export type localidadId = localidad[localidadPk];
export type localidadCreationAttributes = Optional<localidadAttributes, localidadPk>;

export class localidad extends Model<localidadAttributes, localidadCreationAttributes> implements localidadAttributes {
  id!: number;
  codigo!: number;
  nombre!: string;
  cod_provincia!: number;
  cod_afip_localidad?: number;
  cod_postal?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof localidad {
    localidad.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "codigo"
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    cod_provincia: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_afip_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_postal: {
      type: DataTypes.CHAR(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'localidad',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return localidad;
  }
}
