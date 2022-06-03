import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_financiero_ctasAttributes {
  id: number;
  id_cuenta?: number;
  cod_cuenta_madre?: number;
  grupo?: string;
  cod_periodo?: number;
}

export type pla_financiero_ctasPk = "id";
export type pla_financiero_ctasId = pla_financiero_ctas[pla_financiero_ctasPk];
export type pla_financiero_ctasCreationAttributes = Optional<pla_financiero_ctasAttributes, pla_financiero_ctasPk>;

export class pla_financiero_ctas extends Model<pla_financiero_ctasAttributes, pla_financiero_ctasCreationAttributes> implements pla_financiero_ctasAttributes {
  id!: number;
  id_cuenta?: number;
  cod_cuenta_madre?: number;
  grupo?: string;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_financiero_ctas {
    pla_financiero_ctas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_financiero_ctas',
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
        name: "pla_financiero_ctasxkey1",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "cod_cuenta_madre" },
          { name: "grupo" },
        ]
      },
      {
        name: "pla_financiero_ctasxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "id_cuenta" },
        ]
      },
      {
        name: "pla_financiero_ctasxkey3",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "grupo" },
        ]
      },
    ]
  });
  return pla_financiero_ctas;
  }
}
