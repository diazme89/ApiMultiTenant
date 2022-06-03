import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface generador_formulaAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_regimen?: number;
  tipo?: string;
  formula?: string;
  cod_cuenta?: number;
  tipocalculo?: string;
  montominimo?: number;
  minimonoimp?: number;
  alicuota?: number;
  valor?: number;
  aplicaminimo?: string;
  minimoexento?: number;
  circuito?: string;
  usa_formula_aux?: string;
  cod_formula_aux?: number;
  resultado?: number;
  aplica_pagos_intersucursal?: string;
}

export type generador_formulaPk = "id";
export type generador_formulaId = generador_formula[generador_formulaPk];
export type generador_formulaCreationAttributes = Optional<generador_formulaAttributes, generador_formulaPk>;

export class generador_formula extends Model<generador_formulaAttributes, generador_formulaCreationAttributes> implements generador_formulaAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_regimen?: number;
  tipo?: string;
  formula?: string;
  cod_cuenta?: number;
  tipocalculo?: string;
  montominimo?: number;
  minimonoimp?: number;
  alicuota?: number;
  valor?: number;
  aplicaminimo?: string;
  minimoexento?: number;
  circuito?: string;
  usa_formula_aux?: string;
  cod_formula_aux?: number;
  resultado?: number;
  aplica_pagos_intersucursal?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof generador_formula {
    generador_formula.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_regimen: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    formula: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipocalculo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    montominimo: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    minimonoimp: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    alicuota: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    aplicaminimo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    minimoexento: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_formula_aux: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_formula_aux: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    resultado: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    aplica_pagos_intersucursal: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'generador_formula',
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
        name: "generador_formula_idx1",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return generador_formula;
  }
}
