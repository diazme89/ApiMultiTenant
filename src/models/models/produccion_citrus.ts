import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface produccion_citrusAttributes {
  fecha?: string;
  lote?: number;
  transporte?: number;
  distancia?: number;
  pcio_flete?: number;
  remito?: string;
  kg_neto_orig?: number;
  cod_dest?: number;
  kg_neto_dest?: number;
  kg_neto_co?: number;
  observar?: string;
  AREA?: number;
  id: number;
  finca?: number;
  grupo?: number;
  bandejas_org?: number;
  kg_bandejas_org?: number;
  bandejas_dest?: number;
  kg_bandejas_dest?: number;
  por_aceite?: number;
  cosechero_nomb1?: number;
  cosechero_band1?: number;
  cosechero_kilos1?: number;
  cosechero_nomb2?: number;
  cosechero_band2?: number;
  cosechero_kilos2?: number;
  cosechero_nomb3?: number;
  cosechero_band3?: number;
  cosechero_kilos3?: number;
  kg_bruto?: number;
  descarte_por?: number;
  descarte_kg?: number;
  BIN?: number;
  peso_bin?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  tipo?: string;
  id_pc?: number;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  numero?: number;
  volcada?: number;
  kg_bruto_origen?: number;
  kg_tara_origen?: number;
  patente_camion?: string;
  patente_acoplado?: string;
  nombre_chofer?: string;
  cuit_chofer?: string;
  numero_certificado?: number;
  importado_packing?: string;
  variedad?: string;
  cod_unidad_productiva?: number;
  tipo_embase?: string;
  peso_prom_embase?: string;
  destino?: string;
  cod_lote_actividad?: number;
  cod_periodo?: number;
}

export type produccion_citrusPk = "id";
export type produccion_citrusId = produccion_citrus[produccion_citrusPk];
export type produccion_citrusCreationAttributes = Optional<produccion_citrusAttributes, produccion_citrusPk>;

export class produccion_citrus extends Model<produccion_citrusAttributes, produccion_citrusCreationAttributes> implements produccion_citrusAttributes {
  fecha?: string;
  lote?: number;
  transporte?: number;
  distancia?: number;
  pcio_flete?: number;
  remito?: string;
  kg_neto_orig?: number;
  cod_dest?: number;
  kg_neto_dest?: number;
  kg_neto_co?: number;
  observar?: string;
  AREA?: number;
  id!: number;
  finca?: number;
  grupo?: number;
  bandejas_org?: number;
  kg_bandejas_org?: number;
  bandejas_dest?: number;
  kg_bandejas_dest?: number;
  por_aceite?: number;
  cosechero_nomb1?: number;
  cosechero_band1?: number;
  cosechero_kilos1?: number;
  cosechero_nomb2?: number;
  cosechero_band2?: number;
  cosechero_kilos2?: number;
  cosechero_nomb3?: number;
  cosechero_band3?: number;
  cosechero_kilos3?: number;
  kg_bruto?: number;
  descarte_por?: number;
  descarte_kg?: number;
  BIN?: number;
  peso_bin?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  tipo?: string;
  id_pc?: number;
  precio?: number;
  gasto_flete?: number;
  gasto_comercializacion?: number;
  gasto_acondicionamiento?: number;
  numero?: number;
  volcada?: number;
  kg_bruto_origen?: number;
  kg_tara_origen?: number;
  patente_camion?: string;
  patente_acoplado?: string;
  nombre_chofer?: string;
  cuit_chofer?: string;
  numero_certificado?: number;
  importado_packing?: string;
  variedad?: string;
  cod_unidad_productiva?: number;
  tipo_embase?: string;
  peso_prom_embase?: string;
  destino?: string;
  cod_lote_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof produccion_citrus {
    produccion_citrus.init({
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
      type: DataTypes.STRING(10),
      allowNull: true
    },
    kg_neto_orig: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_dest: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    kg_neto_dest: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: true
    },
    kg_neto_co: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    observar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AREA: {
      type: DataTypes.DECIMAL(10,0),
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
    grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    bandejas_org: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_bandejas_org: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    bandejas_dest: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_bandejas_dest: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    por_aceite: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_nomb1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cosechero_band1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_kilos1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_nomb2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cosechero_band2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_kilos2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_nomb3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cosechero_band3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cosechero_kilos3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_bruto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    descarte_por: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    descarte_kg: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BIN: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    peso_bin: {
      type: DataTypes.DECIMAL(18,5),
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
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    volcada: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_bruto_origen: {
      type: DataTypes.DECIMAL(18,5),
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
    numero_certificado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    importado_packing: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_unidad_productiva: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_embase: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    peso_prom_embase: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    destino: {
      type: DataTypes.CHAR(14),
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
    tableName: 'produccion_citrus',
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
  return produccion_citrus;
  }
}
