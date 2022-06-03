import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_lotes_tareasAttributes {
  id: number;
  id_pla_lote?: number;
  cod_tarea?: number;
  tipo?: string;
  orden?: number;
  mes?: number;
  anio?: number;
  porc_superficie?: number;
  superficie?: number;
}

export type pla_lotes_tareasPk = "id";
export type pla_lotes_tareasId = pla_lotes_tareas[pla_lotes_tareasPk];
export type pla_lotes_tareasCreationAttributes = Optional<pla_lotes_tareasAttributes, pla_lotes_tareasPk>;

export class pla_lotes_tareas extends Model<pla_lotes_tareasAttributes, pla_lotes_tareasCreationAttributes> implements pla_lotes_tareasAttributes {
  id!: number;
  id_pla_lote?: number;
  cod_tarea?: number;
  tipo?: string;
  orden?: number;
  mes?: number;
  anio?: number;
  porc_superficie?: number;
  superficie?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_lotes_tareas {
    pla_lotes_tareas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    porc_superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_lotes_tareas',
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
        name: "pla_lotes_tareasxkey1",
        using: "BTREE",
        fields: [
          { name: "id_pla_lote" },
        ]
      },
      {
        name: "pla_lotes_tareasxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_tarea" },
        ]
      },
    ]
  });
  return pla_lotes_tareas;
  }
}
