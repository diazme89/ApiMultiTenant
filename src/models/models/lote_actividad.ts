import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lote_actividadAttributes {
  id: number;
  codigo?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_periodo?: number;
  cod_establecimiento?: number;
  cod_est_actividad?: number;
  descripcion?: string;
  activa?: number;
  superficie?: number;
  fecha_desde?: string;
  fecha_hasta?: string;
}

export type lote_actividadPk = "id";
export type lote_actividadId = lote_actividad[lote_actividadPk];
export type lote_actividadCreationAttributes = Optional<lote_actividadAttributes, lote_actividadPk>;

export class lote_actividad extends Model<lote_actividadAttributes, lote_actividadCreationAttributes> implements lote_actividadAttributes {
  id!: number;
  codigo?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_periodo?: number;
  cod_establecimiento?: number;
  cod_est_actividad?: number;
  descripcion?: string;
  activa?: number;
  superficie?: number;
  fecha_desde?: string;
  fecha_hasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof lote_actividad {
    lote_actividad.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "lote_actividadxkey1"
    },
    cod_lote: {
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
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_est_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    activa: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lote_actividad',
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
        name: "lote_actividadxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "lote_actividadxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "codigo" },
        ]
      },
    ]
  });
  return lote_actividad;
  }
}
