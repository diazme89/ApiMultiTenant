import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_modelos_tareasAttributes {
  id: number;
  id_pla_modelo?: number;
  cod_tarea?: number;
  tipo?: string;
  orden?: number;
  mes?: number;
  anio?: number;
  porc_superficie?: number;
  superficie?: number;
}

export type pla_modelos_tareasPk = "id";
export type pla_modelos_tareasId = pla_modelos_tareas[pla_modelos_tareasPk];
export type pla_modelos_tareasCreationAttributes = Optional<pla_modelos_tareasAttributes, pla_modelos_tareasPk>;

export class pla_modelos_tareas extends Model<pla_modelos_tareasAttributes, pla_modelos_tareasCreationAttributes> implements pla_modelos_tareasAttributes {
  id!: number;
  id_pla_modelo?: number;
  cod_tarea?: number;
  tipo?: string;
  orden?: number;
  mes?: number;
  anio?: number;
  porc_superficie?: number;
  superficie?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_modelos_tareas {
    pla_modelos_tareas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pla_modelo: {
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
    tableName: 'pla_modelos_tareas',
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
  return pla_modelos_tareas;
  }
}
