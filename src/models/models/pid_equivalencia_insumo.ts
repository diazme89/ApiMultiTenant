import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pid_equivalencia_insumoAttributes {
  syn_cod_articulo: number;
  pid_cod_insumo: number;
}

export type pid_equivalencia_insumoPk = "syn_cod_articulo";
export type pid_equivalencia_insumoId = pid_equivalencia_insumo[pid_equivalencia_insumoPk];
export type pid_equivalencia_insumoCreationAttributes = Optional<pid_equivalencia_insumoAttributes, pid_equivalencia_insumoPk>;

export class pid_equivalencia_insumo extends Model<pid_equivalencia_insumoAttributes, pid_equivalencia_insumoCreationAttributes> implements pid_equivalencia_insumoAttributes {
  syn_cod_articulo!: number;
  pid_cod_insumo!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pid_equivalencia_insumo {
    pid_equivalencia_insumo.init({
    syn_cod_articulo: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: false,
      primaryKey: true
    },
    pid_cod_insumo: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pid_equivalencia_insumo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "syn_cod_articulo" },
        ]
      },
    ]
  });
  return pid_equivalencia_insumo;
  }
}
