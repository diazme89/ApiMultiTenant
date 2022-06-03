import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_egresos_actividadAttributes {
  id: number;
  id_cuenta?: number;
  cod_actividad?: number;
  cod_periodo?: number;
}

export type pla_egresos_actividadPk = "id";
export type pla_egresos_actividadId = pla_egresos_actividad[pla_egresos_actividadPk];
export type pla_egresos_actividadCreationAttributes = Optional<pla_egresos_actividadAttributes, pla_egresos_actividadPk>;

export class pla_egresos_actividad extends Model<pla_egresos_actividadAttributes, pla_egresos_actividadCreationAttributes> implements pla_egresos_actividadAttributes {
  id!: number;
  id_cuenta?: number;
  cod_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_egresos_actividad {
    pla_egresos_actividad.init({
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
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_egresos_actividad',
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
  return pla_egresos_actividad;
  }
}
