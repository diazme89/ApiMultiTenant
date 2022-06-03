import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_parametrosAttributes {
  id: number;
  idproc?: number;
  propiedad?: string;
  valor?: string;
}

export type tt_parametrosPk = "id";
export type tt_parametrosId = tt_parametros[tt_parametrosPk];
export type tt_parametrosCreationAttributes = Optional<tt_parametrosAttributes, tt_parametrosPk>;

export class tt_parametros extends Model<tt_parametrosAttributes, tt_parametrosCreationAttributes> implements tt_parametrosAttributes {
  id!: number;
  idproc?: number;
  propiedad?: string;
  valor?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_parametros {
    tt_parametros.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    propiedad: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    valor: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_parametros',
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
        name: "tt_parametros_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_parametros;
  }
}
