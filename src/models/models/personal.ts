import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface personalAttributes {
  id: number;
  codigo: number;
  nombre: string;
  activo?: string;
  mensual?: string;
  hora?: number;
  jornal?: number;
  sueldo?: number;
  manejo_agroquimicos?: string;
  legajo?: string;
  empresa?: string;
  cuadrilla?: number;
  cuadrilla_grupo?: number;
  cuadrilla_orden?: number;
  cod_concepto?: number;
  propio?: string;
}

export type personalPk = "id";
export type personalId = personal[personalPk];
export type personalCreationAttributes = Optional<personalAttributes, personalPk>;

export class personal extends Model<personalAttributes, personalCreationAttributes> implements personalAttributes {
  id!: number;
  codigo!: number;
  nombre!: string;
  activo?: string;
  mensual?: string;
  hora?: number;
  jornal?: number;
  sueldo?: number;
  manejo_agroquimicos?: string;
  legajo?: string;
  empresa?: string;
  cuadrilla?: number;
  cuadrilla_grupo?: number;
  cuadrilla_orden?: number;
  cod_concepto?: number;
  propio?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof personal {
    personal.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(40),
      allowNull: false
    },
    activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mensual: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    hora: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    jornal: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    sueldo: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: true
    },
    manejo_agroquimicos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    legajo: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    empresa: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cuadrilla: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cuadrilla_grupo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cuadrilla_orden: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cod_concepto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    propio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personal',
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
  return personal;
  }
}
