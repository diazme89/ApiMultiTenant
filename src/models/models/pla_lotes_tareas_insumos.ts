import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_lotes_tareas_insumosAttributes {
  id: number;
  id_pla_lote_tarea?: number;
  cod_insumo?: number;
  cantidad?: number;
  dosis?: number;
  id_pla_lote?: number;
}

export type pla_lotes_tareas_insumosPk = "id";
export type pla_lotes_tareas_insumosId = pla_lotes_tareas_insumos[pla_lotes_tareas_insumosPk];
export type pla_lotes_tareas_insumosCreationAttributes = Optional<pla_lotes_tareas_insumosAttributes, pla_lotes_tareas_insumosPk>;

export class pla_lotes_tareas_insumos extends Model<pla_lotes_tareas_insumosAttributes, pla_lotes_tareas_insumosCreationAttributes> implements pla_lotes_tareas_insumosAttributes {
  id!: number;
  id_pla_lote_tarea?: number;
  cod_insumo?: number;
  cantidad?: number;
  dosis?: number;
  id_pla_lote?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_lotes_tareas_insumos {
    pla_lotes_tareas_insumos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_lote_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    id_pla_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_lotes_tareas_insumos',
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
        name: "pla_lotes_tareas_insumosxkey1",
        using: "BTREE",
        fields: [
          { name: "id_pla_lote_tarea" },
        ]
      },
      {
        name: "pla_lotes_tareas_insumosxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_insumo" },
        ]
      },
    ]
  });
  return pla_lotes_tareas_insumos;
  }
}
