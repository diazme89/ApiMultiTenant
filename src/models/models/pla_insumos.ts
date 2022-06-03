import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_insumosAttributes {
  id: number;
  cod_insumo?: number;
  existencia?: number;
  cod_periodo?: number;
}

export type pla_insumosPk = "id";
export type pla_insumosId = pla_insumos[pla_insumosPk];
export type pla_insumosCreationAttributes = Optional<pla_insumosAttributes, pla_insumosPk>;

export class pla_insumos extends Model<pla_insumosAttributes, pla_insumosCreationAttributes> implements pla_insumosAttributes {
  id!: number;
  cod_insumo?: number;
  existencia?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_insumos {
    pla_insumos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_insumos',
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
        name: "pla_insumosxkey1",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "cod_insumo" },
        ]
      },
    ]
  });
  return pla_insumos;
  }
}
