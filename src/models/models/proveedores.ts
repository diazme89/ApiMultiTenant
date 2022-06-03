import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedoresAttributes {
  id: number;
  nombre?: string;
  telefono?: string;
  contacto?: string;
  domicilio?: string;
  codigo_postal?: string;
  email?: string;
  fax?: string;
  cod_proveedor?: number;
  categoria_iva?: string;
  cuit?: string;
  cod_cuenta?: number;
  saldo_inicial?: number;
  moneda?: string;
  numero_cai?: number;
  vencimiento_cai?: string;
  observaciones?: string;
  codigo_cliente?: number;
  cuenta_de_gasto?: string;
  cod_localidad?: number;
  saldo_inicial_tag_2?: number;
  tipo_retencion?: number;
  actualiza_saldo?: number;
  cod_externo?: number;
  alicuota?: number;
  sujeto_retencion?: number;
  categoria_iibb?: number;
  hasta_iibb?: string;
  desde_iibb?: string;
  responsable_pago?: string;
  tipo_corredor?: number;
  proveedor_campo?: number;
  fletero_campo?: number;
  contratista_campo?: number;
  arranque?: number;
  formula?: string;
  grupo?: string;
  origen?: number;
  cod_formula_iibb?: number;
  cod_tipo_doc?: number;
  numero_doc?: number;
  habilitado?: string;
  domicilio_2?: string;
  id_impositivo?: string;
}

export type proveedoresPk = "id";
export type proveedoresId = proveedores[proveedoresPk];
export type proveedoresCreationAttributes = Optional<proveedoresAttributes, proveedoresPk>;

export class proveedores extends Model<proveedoresAttributes, proveedoresCreationAttributes> implements proveedoresAttributes {
  id!: number;
  nombre?: string;
  telefono?: string;
  contacto?: string;
  domicilio?: string;
  codigo_postal?: string;
  email?: string;
  fax?: string;
  cod_proveedor?: number;
  categoria_iva?: string;
  cuit?: string;
  cod_cuenta?: number;
  saldo_inicial?: number;
  moneda?: string;
  numero_cai?: number;
  vencimiento_cai?: string;
  observaciones?: string;
  codigo_cliente?: number;
  cuenta_de_gasto?: string;
  cod_localidad?: number;
  saldo_inicial_tag_2?: number;
  tipo_retencion?: number;
  actualiza_saldo?: number;
  cod_externo?: number;
  alicuota?: number;
  sujeto_retencion?: number;
  categoria_iibb?: number;
  hasta_iibb?: string;
  desde_iibb?: string;
  responsable_pago?: string;
  tipo_corredor?: number;
  proveedor_campo?: number;
  fletero_campo?: number;
  contratista_campo?: number;
  arranque?: number;
  formula?: string;
  grupo?: string;
  origen?: number;
  cod_formula_iibb?: number;
  cod_tipo_doc?: number;
  numero_doc?: number;
  habilitado?: string;
  domicilio_2?: string;
  id_impositivo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedores {
    proveedores.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    telefono: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    contacto: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    codigo_postal: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fax: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    categoria_iva: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    saldo_inicial: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero_cai: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    vencimiento_cai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codigo_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuenta_de_gasto: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_localidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    saldo_inicial_tag_2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tipo_retencion: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    actualiza_saldo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_externo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    sujeto_retencion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoria_iibb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasta_iibb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    desde_iibb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    responsable_pago: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_corredor: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    proveedor_campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fletero_campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    contratista_campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    arranque: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    formula: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    origen: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_formula_iibb: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_tipo_doc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_doc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    domicilio_2: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    id_impositivo: {
      type: DataTypes.CHAR(13),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedores',
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
        name: "proveedore_cod_proveedor",
        using: "BTREE",
        fields: [
          { name: "cod_proveedor" },
        ]
      },
      {
        name: "proveedores_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
    ]
  });
  return proveedores;
  }
}
