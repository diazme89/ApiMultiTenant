import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface entidadesAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  cuit?: string;
}

export type entidadesPk = "id";
export type entidadesId = entidades[entidadesPk];
export type entidadesCreationAttributes = Optional<entidadesAttributes, entidadesPk>;

export class entidades extends Model<entidadesAttributes, entidadesCreationAttributes> implements entidadesAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  cuit?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof entidades {
    entidades.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entidades',
    timestamps: false
  });
  return entidades;
  }
}
