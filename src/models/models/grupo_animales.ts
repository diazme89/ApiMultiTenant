import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface grupo_animalesAttributes {
  id: number;
  codigo: number;
  descripcion: string;
}

export type grupo_animalesPk = "id";
export type grupo_animalesId = grupo_animales[grupo_animalesPk];
export type grupo_animalesCreationAttributes = Optional<grupo_animalesAttributes, grupo_animalesPk>;

export class grupo_animales extends Model<grupo_animalesAttributes, grupo_animalesCreationAttributes> implements grupo_animalesAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof grupo_animales {
    grupo_animales.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      unique: "grupo_animalesxkey1"
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'grupo_animales',
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
        name: "grupo_animalesxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return grupo_animales;
  }
}
