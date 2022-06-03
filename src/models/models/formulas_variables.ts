import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface formulas_variablesAttributes {
  id: number;
  nombre: string;
  interno: string;
  origen: string;
  tipo: string;
  formula: string;
  circuito?: string;
}

export type formulas_variablesPk = "id";
export type formulas_variablesId = formulas_variables[formulas_variablesPk];
export type formulas_variablesCreationAttributes = Optional<formulas_variablesAttributes, formulas_variablesPk>;

export class formulas_variables extends Model<formulas_variablesAttributes, formulas_variablesCreationAttributes> implements formulas_variablesAttributes {
  id!: number;
  nombre!: string;
  interno!: string;
  origen!: string;
  tipo!: string;
  formula!: string;
  circuito?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof formulas_variables {
    formulas_variables.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    interno: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    origen: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    tipo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    formula: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'formulas_variables',
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
  return formulas_variables;
  }
}
