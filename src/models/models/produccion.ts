import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface produccionAttributes {
  fecha?: string;
  lote?: number;
  transporte?: number;
  distancia?: number;
  pcio_flete?: number;
  remito?: number;
  kg_origen?: number;
  humedad1?: number;
  kg_neto_orig?: number;
  cod_dest?: number;
  destino?: string;
  kg_destino?: number;
  humedad2?: number;
  kg_neto_dest?: number;
  diferencia?: number;
  romaneo?: number;
  zaranda?: number;
  volatil?: number;
  cuerp_ext?: number;
  tierra?: number;
  quebrados?: number;
  daniados?: number;
  chamico?: number;
  otros?: number;
  factor?: number;
  kg_neto_co?: number;
  observar?: string;
  AREA?: number;
  id: number;
  finca?: number;
  tipo_origen?: string;
  origen?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  tipo?: string;
  id_pc?: number;
  numero?: number;
  kg_bruto_origen?: number;
  kg_tara_origen?: number;
  patente_camion?: string;
  patente_acoplado?: string;
  nombre_chofer?: string;
  cuit_chofer?: string;
  tipo_grano?: string;
  cod_cuentayorden1?: number;
  cod_cuentayorden2?: number;
  cod_corredor?: number;
  cod_representante?: number;
  cod_asignador_cupo?: number;
  proc_calle?: string;
  proc_nro?: string;
  proc_codpostal?: string;
  proc_localidad?: string;
  proc_depto?: string;
  proc_provincia?: string;
  fecha_cupo?: string;
  variedad?: string;
  cod_lote_actividad?: number;
  cod_periodo?: number;
  id_contrato?: number;
  id_contratista?: number;
}

export type produccionPk = "id";
export type produccionId = produccion[produccionPk];
export type produccionCreationAttributes = Optional<produccionAttributes, produccionPk>;

export class produccion extends Model<produccionAttributes, produccionCreationAttributes> implements produccionAttributes {
  fecha?: string;
  lote?: number;
  transporte?: number;
  distancia?: number;
  pcio_flete?: number;
  remito?: number;
  kg_origen?: number;
  humedad1?: number;
  kg_neto_orig?: number;
  cod_dest?: number;
  destino?: string;
  kg_destino?: number;
  humedad2?: number;
  kg_neto_dest?: number;
  diferencia?: number;
  romaneo?: number;
  zaranda?: number;
  volatil?: number;
  cuerp_ext?: number;
  tierra?: number;
  quebrados?: number;
  daniados?: number;
  chamico?: number;
  otros?: number;
  factor?: number;
  kg_neto_co?: number;
  observar?: string;
  AREA?: number;
  id!: number;
  finca?: number;
  tipo_origen?: string;
  origen?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  tipo?: string;
  id_pc?: number;
  numero?: number;
  kg_bruto_origen?: number;
  kg_tara_origen?: number;
  patente_camion?: string;
  patente_acoplado?: string;
  nombre_chofer?: string;
  cuit_chofer?: string;
  tipo_grano?: string;
  cod_cuentayorden1?: number;
  cod_cuentayorden2?: number;
  cod_corredor?: number;
  cod_representante?: number;
  cod_asignador_cupo?: number;
  proc_calle?: string;
  proc_nro?: string;
  proc_codpostal?: string;
  proc_localidad?: string;
  proc_depto?: string;
  proc_provincia?: string;
  fecha_cupo?: string;
  variedad?: string;
  cod_lote_actividad?: number;
  cod_periodo?: number;
  id_contrato?: number;
  id_contratista?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof produccion {
    produccion.init({
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    transporte: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    distancia: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    pcio_flete: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    remito: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    kg_origen: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    humedad1: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    kg_neto_orig: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    cod_dest: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    destino: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    kg_destino: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: true
    },
    humedad2: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    kg_neto_dest: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    diferencia: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    romaneo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    zaranda: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    volatil: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    cuerp_ext: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    tierra: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    quebrados: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    daniados: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    chamico: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    otros: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    factor: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    kg_neto_co: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    observar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AREA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    finca: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    tipo_origen: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    origen: {
      type: DataTypes.DECIMAL(4,0),
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
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    gasto_flete: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    gasto_comercializacion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    gasto_acondicionamiento: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg_bruto_origen: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    kg_tara_origen: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    patente_camion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    patente_acoplado: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nombre_chofer: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cuit_chofer: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    tipo_grano: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    cod_cuentayorden1: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_cuentayorden2: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_corredor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_representante: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_asignador_cupo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    proc_calle: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    proc_nro: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    proc_codpostal: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    proc_localidad: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    proc_depto: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    proc_provincia: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fecha_cupo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_lote_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_contrato: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_contratista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produccion',
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
        name: "produccion_id_contrato",
        using: "BTREE",
        fields: [
          { name: "id_contrato" },
        ]
      },
      {
        name: "produccion_cod_dest",
        using: "BTREE",
        fields: [
          { name: "cod_dest" },
        ]
      },
      {
        name: "produccion_origen",
        using: "BTREE",
        fields: [
          { name: "origen" },
        ]
      },
    ]
  });
  return produccion;
  }
}
