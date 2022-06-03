import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_lote_actividadAttributes {
  id: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_lote_actividadPk = "id";
export type tt_lote_actividadId = tt_lote_actividad[tt_lote_actividadPk];
export type tt_lote_actividadCreationAttributes = Optional<tt_lote_actividadAttributes, tt_lote_actividadPk>;

export class tt_lote_actividad extends Model<tt_lote_actividadAttributes, tt_lote_actividadCreationAttributes> implements tt_lote_actividadAttributes {
  id!: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_lote_actividad {
    tt_lote_actividad.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_lote_actividad',
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
        name: "tt_lote_actividadxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
        ]
      },
    ]
  });
  return tt_lote_actividad;
  }
}
