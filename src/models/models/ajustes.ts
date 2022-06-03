import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ajustesAttributes {
  fecha?: string;
  tipo?: number;
  cultivo?: number;
  cantidad?: number;
  empresa?: string;
  observar?: string;
  ordenado?: string;
  existencia?: number;
  ajuste?: string;
  motivo?: string;
  id: number;
  precio?: number;
  unidades?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  destino?: number;
  proveedor?: string;
  id_pc?: number;
  fecha_ingreso?: string;
  factura_nro?: string;
  numero?: number;
  cod_producto?: number;
  remito_nro?: number;
  remito_punto_de_venta?: number;
  nro_vale?: number;
  cod_solicitante?: number;
  cod_retira?: number;
  idinterdeposito?: number;
  id_externo?: number;
  factura_establecimiento?: number;
  factura_punto_de_venta?: number;
  remito_establecimiento?: number;
  cod_periodo?: number;
}

export type ajustesPk = "id";
export type ajustesId = ajustes[ajustesPk];
export type ajustesCreationAttributes = Optional<ajustesAttributes, ajustesPk>;

export class ajustes extends Model<ajustesAttributes, ajustesCreationAttributes> implements ajustesAttributes {
  fecha?: string;
  tipo?: number;
  cultivo?: number;
  cantidad?: number;
  empresa?: string;
  observar?: string;
  ordenado?: string;
  existencia?: number;
  ajuste?: string;
  motivo?: string;
  id!: number;
  precio?: number;
  unidades?: number;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  destino?: number;
  proveedor?: string;
  id_pc?: number;
  fecha_ingreso?: string;
  factura_nro?: string;
  numero?: number;
  cod_producto?: number;
  remito_nro?: number;
  remito_punto_de_venta?: number;
  nro_vale?: number;
  cod_solicitante?: number;
  cod_retira?: number;
  idinterdeposito?: number;
  id_externo?: number;
  factura_establecimiento?: number;
  factura_punto_de_venta?: number;
  remito_establecimiento?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ajustes {
    ajustes.init({
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    cultivo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    empresa: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    observar: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    ordenado: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ajuste: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    motivo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    precio: {
      type: DataTypes.DECIMAL(13,4),
      allowNull: true
    },
    unidades: {
      type: DataTypes.DECIMAL(10,3),
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
    destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    factura_nro: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_producto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    remito_nro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    remito_punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nro_vale: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_solicitante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_retira: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    idinterdeposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_externo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    factura_establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    factura_punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    remito_establecimiento: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ajustes',
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
  return ajustes;
  }
}
