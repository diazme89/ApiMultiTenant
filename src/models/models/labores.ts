import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface laboresAttributes {
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
  nro_ordentrabajo?: number;
  numero?: number;
  parte_num?: number;
  cod_periodo?: number;
  cod_lote_actividad?: number;
  cod_establecimiento?: number;
  imputa?: string;
}

export type laboresPk = "id";
export type laboresId = labores[laboresPk];
export type laboresCreationAttributes = Optional<laboresAttributes, laboresPk>;

export class labores extends Model<laboresAttributes, laboresCreationAttributes> implements laboresAttributes {
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
  nro_ordentrabajo?: number;
  numero?: number;
  parte_num?: number;
  cod_periodo?: number;
  cod_lote_actividad?: number;
  cod_establecimiento?: number;
  imputa?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores {
    labores.init({
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
      type: DataTypes.DECIMAL(8,0),
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
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_ordentrabajo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    parte_num: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    imputa: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labores',
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
        name: "laboresxfecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "laboresxcod_lote_actividad",
        using: "BTREE",
        fields: [
          { name: "cod_lote_actividad" },
        ]
      },
      {
        name: "laboresxtarea",
        using: "BTREE",
        fields: [
          { name: "cod_tarea" },
        ]
      },
    ]
  });
  return labores;
  }
}
