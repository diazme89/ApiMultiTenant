import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_modelos_tareas_insumosAttributes {
  id: number;
  id_pla_modelo_tarea?: number;
  cod_insumo?: number;
  cantidad?: number;
  dosis?: number;
  id_pla_modelo?: number;
}

export type pla_modelos_tareas_insumosPk = "id";
export type pla_modelos_tareas_insumosId = pla_modelos_tareas_insumos[pla_modelos_tareas_insumosPk];
export type pla_modelos_tareas_insumosCreationAttributes = Optional<pla_modelos_tareas_insumosAttributes, pla_modelos_tareas_insumosPk>;

export class pla_modelos_tareas_insumos extends Model<pla_modelos_tareas_insumosAttributes, pla_modelos_tareas_insumosCreationAttributes> implements pla_modelos_tareas_insumosAttributes {
  id!: number;
  id_pla_modelo_tarea?: number;
  cod_insumo?: number;
  cantidad?: number;
  dosis?: number;
  id_pla_modelo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_modelos_tareas_insumos {
    pla_modelos_tareas_insumos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_modelo_tarea: {
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
    id_pla_modelo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_modelos_tareas_insumos',
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
  return pla_modelos_tareas_insumos;
  }
}
