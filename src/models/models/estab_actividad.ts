import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface estab_actividadAttributes {
  id: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  id_cabecera?: number;
}

export type estab_actividadPk = "id";
export type estab_actividadId = estab_actividad[estab_actividadPk];
export type estab_actividadCreationAttributes = Optional<estab_actividadAttributes, estab_actividadPk>;

export class estab_actividad extends Model<estab_actividadAttributes, estab_actividadCreationAttributes> implements estab_actividadAttributes {
  id!: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  id_cabecera?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof estab_actividad {
    estab_actividad.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    id_cabecera: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estab_actividad',
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
  return estab_actividad;
  }
}
