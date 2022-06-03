import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientesAttributes {
  id: number;
  cod_cliente?: number;
  nombre?: string;
  domicilio?: string;
  telefonos?: string;
  contacto?: string;
  cod_zona?: number;
  categoria_iva?: string;
  cuit?: string;
  localidad?: string;
  codigo_postal?: string;
  cod_cuenta?: number;
  saldo_inicial?: number;
  moneda?: string;
  cod_localidad?: number;
  cod_vendedor?: number;
  percepcionDGR?: string;
  sedronar?: string;
  percepciondgr_porc?: number;
  observaciones?: string;
  saldo_inicial_tag_2?: number;
  lista_precio?: number;
  mail?: string;
  actualiza_saldo?: number;
  razon_social?: string;
  id_tipo_destino?: number;
  id_grupo?: number;
  tipo_merma?: number;
  planilla?: string;
  percepcion1?: number;
  percepcion2?: number;
  cliente_campo?: number;
  cliente_cont?: number;
  origen?: number;
  cod_rubro_cliente?: number;
  condicion_venta?: number;
  cod_tipo_doc?: number;
  numero_doc?: string;
  control_margen_venta?: string;
  cod_formula_iibb?: number;
  habilitado?: string;
  cod_compatibilidad?: string;
  clave?: string;
}

export type clientesPk = "id";
export type clientesId = clientes[clientesPk];
export type clientesCreationAttributes = Optional<clientesAttributes, clientesPk>;

export class clientes extends Model<clientesAttributes, clientesCreationAttributes> implements clientesAttributes {
  id!: number;
  cod_cliente?: number;
  nombre?: string;
  domicilio?: string;
  telefonos?: string;
  contacto?: string;
  cod_zona?: number;
  categoria_iva?: string;
  cuit?: string;
  localidad?: string;
  codigo_postal?: string;
  cod_cuenta?: number;
  saldo_inicial?: number;
  moneda?: string;
  cod_localidad?: number;
  cod_vendedor?: number;
  percepcionDGR?: string;
  sedronar?: string;
  percepciondgr_porc?: number;
  observaciones?: string;
  saldo_inicial_tag_2?: number;
  lista_precio?: number;
  mail?: string;
  actualiza_saldo?: number;
  razon_social?: string;
  id_tipo_destino?: number;
  id_grupo?: number;
  tipo_merma?: number;
  planilla?: string;
  percepcion1?: number;
  percepcion2?: number;
  cliente_campo?: number;
  cliente_cont?: number;
  origen?: number;
  cod_rubro_cliente?: number;
  condicion_venta?: number;
  cod_tipo_doc?: number;
  numero_doc?: string;
  control_margen_venta?: string;
  cod_formula_iibb?: number;
  habilitado?: string;
  cod_compatibilidad?: string;
  clave?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes {
    clientes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    contacto: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_zona: {
      type: DataTypes.DECIMAL(5,0),
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
    localidad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    codigo_postal: {
      type: DataTypes.CHAR(8),
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
    cod_localidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    percepcionDGR: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    sedronar: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    percepciondgr_porc: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    saldo_inicial_tag_2: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    lista_precio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    actualiza_saldo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    id_tipo_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_merma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    planilla: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    percepcion1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    percepcion2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cliente_campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cliente_cont: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    origen: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_rubro_cliente: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    condicion_venta: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_tipo_doc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_doc: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    control_margen_venta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_formula_iibb: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    cod_compatibilidad: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      unique: "cod_compatibilidad"
    },
    clave: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'clientes',
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
        name: "cod_compatibilidad",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_compatibilidad" },
        ]
      },
      {
        name: "clientes_cod_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
      {
        name: "clientes_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
    ]
  });
  return clientes;
  }
}
