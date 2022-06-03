import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impuestos_cabeceraAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  cod_pais?: number;
  tipo?: number;
  origen?: string;
  circuito?: string;
  orden?: string;
}

export type impuestos_cabeceraPk = "id";
export type impuestos_cabeceraId = impuestos_cabecera[impuestos_cabeceraPk];
export type impuestos_cabeceraCreationAttributes = Optional<impuestos_cabeceraAttributes, impuestos_cabeceraPk>;

export class impuestos_cabecera extends Model<impuestos_cabeceraAttributes, impuestos_cabeceraCreationAttributes> implements impuestos_cabeceraAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  cod_pais?: number;
  tipo?: number;
  origen?: string;
  circuito?: string;
  orden?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof impuestos_cabecera {
    impuestos_cabecera.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(70),
      allowNull: true
    },
    cod_pais: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    origen: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    orden: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impuestos_cabecera',
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
  return impuestos_cabecera;
  }
}
