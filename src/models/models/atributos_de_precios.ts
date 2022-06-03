import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface atributos_de_preciosAttributes {
  id: number;
  cod_atributo: number;
  descripcion: string;
  circuito: string;
  operador: string;
  coeficiente?: number;
}

export type atributos_de_preciosPk = "id";
export type atributos_de_preciosId = atributos_de_precios[atributos_de_preciosPk];
export type atributos_de_preciosCreationAttributes = Optional<atributos_de_preciosAttributes, atributos_de_preciosPk>;

export class atributos_de_precios extends Model<atributos_de_preciosAttributes, atributos_de_preciosCreationAttributes> implements atributos_de_preciosAttributes {
  id!: number;
  cod_atributo!: number;
  descripcion!: string;
  circuito!: string;
  operador!: string;
  coeficiente?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof atributos_de_precios {
    atributos_de_precios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_atributo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    operador: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    coeficiente: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'atributos_de_precios',
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
  return atributos_de_precios;
  }
}
