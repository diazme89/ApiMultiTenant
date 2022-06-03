import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordentrabajoAttributes {
  id: number;
  fecha?: string;
  cod_area?: number;
  cod_lote?: number;
  cod_tarea?: number;
  propia?: string;
  cod_contratista?: number;
  observaciones_tarea?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  precio_tarea?: number;
  observaciones_maquina?: string;
  cantidad?: number;
  tipo?: string;
  supervisor?: number;
  tecnico?: number;
  justificacion?: string;
  ejecutada?: string;
  numero?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;
}

export type ordentrabajoPk = "id";
export type ordentrabajoId = ordentrabajo[ordentrabajoPk];
export type ordentrabajoCreationAttributes = Optional<ordentrabajoAttributes, ordentrabajoPk>;

export class ordentrabajo extends Model<ordentrabajoAttributes, ordentrabajoCreationAttributes> implements ordentrabajoAttributes {
  id!: number;
  fecha?: string;
  cod_area?: number;
  cod_lote?: number;
  cod_tarea?: number;
  propia?: string;
  cod_contratista?: number;
  observaciones_tarea?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  precio_tarea?: number;
  observaciones_maquina?: string;
  cantidad?: number;
  tipo?: string;
  supervisor?: number;
  tecnico?: number;
  justificacion?: string;
  ejecutada?: string;
  numero?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ordentrabajo {
    ordentrabajo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_area: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    propia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_contratista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    observaciones_tarea: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    precio_tarea: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    observaciones_maquina: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    supervisor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tecnico: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    justificacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ejecutada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordentrabajo',
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
  return ordentrabajo;
  }
}
