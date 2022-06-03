import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface novedadesAttributes {
  id: number;
  tipo_mov: string;
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
  cod_actividad_orig?: number;
  motivo?: number;
  kg_ant?: number;
  cod_grupo_orig?: number;
  kg_total_bruto?: number;
  porc_desbaste?: number;
  cant_aux?: number;
  fecha_alta?: Date;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  tipo_servicio?: number;
  tipo_movimiento?: number;
  id_inicio_servicio?: number;
  tipo_origen?: number;
}

export type novedadesPk = "id";
export type novedadesId = novedades[novedadesPk];
export type novedadesCreationAttributes = Optional<novedadesAttributes, novedadesPk>;

export class novedades extends Model<novedadesAttributes, novedadesCreationAttributes> implements novedadesAttributes {
  id!: number;
  tipo_mov!: string;
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
  cod_actividad_orig?: number;
  motivo?: number;
  kg_ant?: number;
  cod_grupo_orig?: number;
  kg_total_bruto?: number;
  porc_desbaste?: number;
  cant_aux?: number;
  fecha_alta?: Date;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  tipo_servicio?: number;
  tipo_movimiento?: number;
  id_inicio_servicio?: number;
  tipo_origen?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof novedades {
    novedades.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_mov: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    num_comp: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    remito: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_categoria_orig: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_establecimiento_orig: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    kg: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    kg_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    kg_precio: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    imp_bruto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    flete: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    gastos: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    num_compra: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    num_venta: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_transportista: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_actividad_orig: {
      type: DataTypes.DECIMAL(19,0),
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
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    kg_total_bruto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    porc_desbaste: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    cant_aux: {
      type: DataTypes.DECIMAL(19,0),
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
    tipo_servicio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_movimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_inicio_servicio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_origen: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'novedades',
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
        name: "novedades_xtipo_movimiento",
        using: "BTREE",
        fields: [
          { name: "tipo_movimiento" },
        ]
      },
      {
        name: "novedades_xestab_actividad",
        using: "BTREE",
        fields: [
          { name: "cod_establecimiento" },
          { name: "cod_actividad" },
        ]
      },
      {
        name: "novedadesxid_inicio_servicio",
        using: "BTREE",
        fields: [
          { name: "id_inicio_servicio" },
        ]
      },
      {
        name: "novedadesxkey1",
        using: "BTREE",
        fields: [
          { name: "fecha" },
          { name: "tipo_movimiento" },
        ]
      },
    ]
  });
  return novedades;
  }
}
