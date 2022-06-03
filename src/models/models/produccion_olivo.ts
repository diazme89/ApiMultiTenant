import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface produccion_olivoAttributes {
  id: number;
  fecha?: string;
  fecha_alta?: string;
  hora?: string;
  remito_numero?: number;
  remito_pto_vta?: number;
  cod_area?: number;
  cod_lote?: number;
  cod_finca?: number;
  variedad?: string;
  cod_transportista?: number;
  pcio_flete?: number;
  nro_carga?: number;
  origen_peso_bruto?: number;
  origen_peso_tara?: number;
  origen_peso_neto?: number;
  cod_destino?: number;
  destino_peso_bruto?: number;
  destino_peso_tara?: number;
  destino_peso_neto?: number;
  descarte_porc?: number;
  descarte_kg?: number;
  acidez_porc?: number;
  bin?: number;
  bin_kg?: number;
  diferencia_peso?: number;
  observacion?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
  numero?: number;
  destino_acidez_porc?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;
}

export type produccion_olivoPk = "id";
export type produccion_olivoId = produccion_olivo[produccion_olivoPk];
export type produccion_olivoCreationAttributes = Optional<produccion_olivoAttributes, produccion_olivoPk>;

export class produccion_olivo extends Model<produccion_olivoAttributes, produccion_olivoCreationAttributes> implements produccion_olivoAttributes {
  id!: number;
  fecha?: string;
  fecha_alta?: string;
  hora?: string;
  remito_numero?: number;
  remito_pto_vta?: number;
  cod_area?: number;
  cod_lote?: number;
  cod_finca?: number;
  variedad?: string;
  cod_transportista?: number;
  pcio_flete?: number;
  nro_carga?: number;
  origen_peso_bruto?: number;
  origen_peso_tara?: number;
  origen_peso_neto?: number;
  cod_destino?: number;
  destino_peso_bruto?: number;
  destino_peso_tara?: number;
  destino_peso_neto?: number;
  descarte_porc?: number;
  descarte_kg?: number;
  acidez_porc?: number;
  bin?: number;
  bin_kg?: number;
  diferencia_peso?: number;
  observacion?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
  numero?: number;
  destino_acidez_porc?: number;
  cod_lote_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof produccion_olivo {
    produccion_olivo.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    remito_numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    remito_pto_vta: {
      type: DataTypes.DECIMAL(10,0),
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
    cod_finca: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_transportista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    pcio_flete: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    nro_carga: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    origen_peso_bruto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    origen_peso_tara: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    origen_peso_neto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    destino_peso_bruto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    destino_peso_tara: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    destino_peso_neto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    descarte_porc: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    descarte_kg: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    acidez_porc: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    bin: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    bin_kg: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    diferencia_peso: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(20),
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
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    destino_acidez_porc: {
      type: DataTypes.DECIMAL(5,3),
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
    tableName: 'produccion_olivo',
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
  return produccion_olivo;
  }
}
