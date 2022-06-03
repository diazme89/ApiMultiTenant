import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface produccion_caniaAttributes {
  tipo_cosec?: string;
  numero_rem?: number;
  numero_val?: number;
  fecha?: string;
  AREA?: number;
  lote?: number;
  maquinista?: number;
  cuartero?: number;
  transportista?: number;
  distanci?: number;
  pcio_flete?: number;
  tarea?: number;
  cortador?: number;
  cargador?: number;
  pelador1?: number;
  pelador2?: number;
  pelador3?: number;
  nro_carga?: number;
  or_bruto?: number;
  or_tara?: number;
  or_neto?: number;
  hora?: string;
  destino?: number;
  fecha_ent?: string;
  de_bruto?: number;
  de_tara?: number;
  de_neto?: number;
  kg_neto_dest?: number;
  trash_kg?: number;
  trash_porc?: number;
  rendimient?: number;
  pureza?: number;
  pol_porc?: number;
  factor_k?: number;
  dato1?: number;
  dato2?: number;
  cania_neta?: number;
  kg_azucar?: number;
  observacion?: string;
  id: number;
  finca?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  planillero?: number;
  tipo?: string;
  id_pc?: number;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  numero?: number;
  variedad?: string;
  cod_maquina?: number;
  cod_maq_cuartero?: number;
  cod_maq_transportista?: number;
  nro_cta?: number;
  nro_frente?: number;
  distancia_km?: number;
  or_trash_kg?: number;
  or_rendim?: number;
  nro_muestra?: number;
  bxleidos?: number;
  polleido?: number;
  or_kg_azucar?: number;
  or_trash_porc?: number;
  temperatura?: number;
  bx_corregido?: number;
  pol_jugo?: number;
  rend_pureza?: number;
  pol_cania?: number;
  prop_trash_porc?: number;
  prop_trash_kg?: number;
  cod_finca_externo?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;
}

export type produccion_caniaPk = "id";
export type produccion_caniaId = produccion_cania[produccion_caniaPk];
export type produccion_caniaCreationAttributes = Optional<produccion_caniaAttributes, produccion_caniaPk>;

export class produccion_cania extends Model<produccion_caniaAttributes, produccion_caniaCreationAttributes> implements produccion_caniaAttributes {
  tipo_cosec?: string;
  numero_rem?: number;
  numero_val?: number;
  fecha?: string;
  AREA?: number;
  lote?: number;
  maquinista?: number;
  cuartero?: number;
  transportista?: number;
  distanci?: number;
  pcio_flete?: number;
  tarea?: number;
  cortador?: number;
  cargador?: number;
  pelador1?: number;
  pelador2?: number;
  pelador3?: number;
  nro_carga?: number;
  or_bruto?: number;
  or_tara?: number;
  or_neto?: number;
  hora?: string;
  destino?: number;
  fecha_ent?: string;
  de_bruto?: number;
  de_tara?: number;
  de_neto?: number;
  kg_neto_dest?: number;
  trash_kg?: number;
  trash_porc?: number;
  rendimient?: number;
  pureza?: number;
  pol_porc?: number;
  factor_k?: number;
  dato1?: number;
  dato2?: number;
  cania_neta?: number;
  kg_azucar?: number;
  observacion?: string;
  id!: number;
  finca?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  planillero?: number;
  tipo?: string;
  id_pc?: number;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  numero?: number;
  variedad?: string;
  cod_maquina?: number;
  cod_maq_cuartero?: number;
  cod_maq_transportista?: number;
  nro_cta?: number;
  nro_frente?: number;
  distancia_km?: number;
  or_trash_kg?: number;
  or_rendim?: number;
  nro_muestra?: number;
  bxleidos?: number;
  polleido?: number;
  or_kg_azucar?: number;
  or_trash_porc?: number;
  temperatura?: number;
  bx_corregido?: number;
  pol_jugo?: number;
  rend_pureza?: number;
  pol_cania?: number;
  prop_trash_porc?: number;
  prop_trash_kg?: number;
  cod_finca_externo?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof produccion_cania {
    produccion_cania.init({
    tipo_cosec: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    numero_rem: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_val: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    maquinista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuartero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    transportista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    distanci: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    pcio_flete: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    tarea: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cortador: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cargador: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pelador1: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pelador2: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pelador3: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nro_carga: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    or_bruto: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    or_tara: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    or_neto: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    fecha_ent: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    de_bruto: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    de_tara: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    de_neto: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    kg_neto_dest: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    trash_kg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    trash_porc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    rendimient: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pureza: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pol_porc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    factor_k: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dato1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dato2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cania_neta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg_azucar: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    finca: {
      type: DataTypes.DECIMAL(10,0),
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
    planillero: {
      type: DataTypes.DECIMAL(10,0),
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
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_maq_cuartero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_maq_transportista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nro_cta: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    nro_frente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    distancia_km: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    or_trash_kg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    or_rendim: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    nro_muestra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    bxleidos: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    polleido: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    or_kg_azucar: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    or_trash_porc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    temperatura: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    bx_corregido: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pol_jugo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    rend_pureza: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pol_cania: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    prop_trash_porc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    prop_trash_kg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_finca_externo: {
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
    tableName: 'produccion_cania',
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
  return produccion_cania;
  }
}
