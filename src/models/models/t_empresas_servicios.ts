import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_empresas_serviciosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  tipo?: string;
  abrevia?: string;
  no_editable?: number;
}

export type t_empresas_serviciosPk = "id";
export type t_empresas_serviciosId = t_empresas_servicios[t_empresas_serviciosPk];
export type t_empresas_serviciosCreationAttributes = Optional<t_empresas_serviciosAttributes, t_empresas_serviciosPk>;

export class t_empresas_servicios extends Model<t_empresas_serviciosAttributes, t_empresas_serviciosCreationAttributes> implements t_empresas_serviciosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  tipo?: string;
  abrevia?: string;
  no_editable?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_empresas_servicios {
    t_empresas_servicios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "t_empresas_serviciosxkey1"
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    abrevia: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    no_editable: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_empresas_servicios',
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
        name: "t_empresas_serviciosxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return t_empresas_servicios;
  }
}
