import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_novedadesAttributes {
  id: number;
  accion?: string;
  fecha_editada?: number;
  tipo_base?: string;
  id_reg?: number;
  tipo_mov?: string;
  fecha?: string;
  cod_establecimiento?: number;
  cod_grupo?: number;
  num_comp?: number;
  cod_categoria?: number;
  observaciones?: string;
  remito?: number;
  cod_categoria_orig?: number;
  cod_establecimiento_orig?: number;
  kg?: number;
  cantidad?: number;
  kg_total?: number;
  kg_precio?: number;
  imp_bruto?: number;
  flete?: number;
  gastos?: number;
  importe_total?: number;
  num_compra?: number;
  num_venta?: number;
  cod_actividad?: number;
  cod_proveedor?: number;
  cod_cliente?: number;
  cod_transportista?: number;
  tipo_movimiento?: number;
  cod_actividad_orig?: number;
  motivo?: number;
  kg_ant?: number;
  cod_grupo_orig?: number;
  cod_tarea?: number;
  tipo_servicio?: number;
  id_inicio_servicio?: number;
  tipo_origen?: number;
  kg_total_bruto?: number;
  porc_desbaste?: number;
  cant_aux?: number;
  idproc?: number;
  fecha_alta?: Date;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  cod_periodo?: number;
  flag?: number;
}

export type tt_novedadesPk = "id";
export type tt_novedadesId = tt_novedades[tt_novedadesPk];
export type tt_novedadesCreationAttributes = Optional<tt_novedadesAttributes, tt_novedadesPk>;

export class tt_novedades extends Model<tt_novedadesAttributes, tt_novedadesCreationAttributes> implements tt_novedadesAttributes {
  id!: number;
  accion?: string;
  fecha_editada?: number;
  tipo_base?: string;
  id_reg?: number;
  tipo_mov?: string;
  fecha?: string;
  cod_establecimiento?: number;
  cod_grupo?: number;
  num_comp?: number;
  cod_categoria?: number;
  observaciones?: string;
  remito?: number;
  cod_categoria_orig?: number;
  cod_establecimiento_orig?: number;
  kg?: number;
  cantidad?: number;
  kg_total?: number;
  kg_precio?: number;
  imp_bruto?: number;
  flete?: number;
  gastos?: number;
  importe_total?: number;
  num_compra?: number;
  num_venta?: number;
  cod_actividad?: number;
  cod_proveedor?: number;
  cod_cliente?: number;
  cod_transportista?: number;
  tipo_movimiento?: number;
  cod_actividad_orig?: number;
  motivo?: number;
  kg_ant?: number;
  cod_grupo_orig?: number;
  cod_tarea?: number;
  tipo_servicio?: number;
  id_inicio_servicio?: number;
  tipo_origen?: number;
  kg_total_bruto?: number;
  porc_desbaste?: number;
  cant_aux?: number;
  idproc?: number;
  fecha_alta?: Date;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  cod_periodo?: number;
  flag?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_novedades {
    tt_novedades.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    accion: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    fecha_editada: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    tipo_base: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    id_reg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_mov: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    num_comp: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    remito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_categoria_orig: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_establecimiento_orig: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg_total: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    imp_bruto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    flete: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    gastos: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    num_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    num_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_transportista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_movimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad_orig: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    motivo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    kg_ant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cod_grupo_orig: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_servicio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_inicio_servicio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_origen: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg_total_bruto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    porc_desbaste: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cant_aux: {
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
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    flag: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_novedades',
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
        name: "tt_novedadesxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "flag" },
        ]
      },
      {
        name: "tt_novedadesxkey2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id_reg" },
          { name: "flag" },
        ]
      },
    ]
  });
  return tt_novedades;
  }
}
