import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface empresasAttributes {
  id: number;
  cod_empresa?: number;
  nombre?: string;
  direccion?: string;
  cuit?: string;
  telefonos?: string;
  categoria_iva?: string;
  ingresos_brutos?: string;
  inicio_actividad?: string;
  usa_fiscal?: string;
  cod_externo?: number;
  cod_localidad?: number;
  codigo_postal?: string;
  conv_multilateral?: number;
  agente_retencion?: string;
  grupo?: string;
  nombre_1?: string;
  numero_cai?: number;
  vencimiento_cai?: string;
  cod_deposito?: number;
  email?: string;
  agente_percepcion?: string;
  cod_cliente?: number;
}

export type empresasPk = "id";
export type empresasId = empresas[empresasPk];
export type empresasCreationAttributes = Optional<empresasAttributes, empresasPk>;

export class empresas extends Model<empresasAttributes, empresasCreationAttributes> implements empresasAttributes {
  id!: number;
  cod_empresa?: number;
  nombre?: string;
  direccion?: string;
  cuit?: string;
  telefonos?: string;
  categoria_iva?: string;
  ingresos_brutos?: string;
  inicio_actividad?: string;
  usa_fiscal?: string;
  cod_externo?: number;
  cod_localidad?: number;
  codigo_postal?: string;
  conv_multilateral?: number;
  agente_retencion?: string;
  grupo?: string;
  nombre_1?: string;
  numero_cai?: number;
  vencimiento_cai?: string;
  cod_deposito?: number;
  email?: string;
  agente_percepcion?: string;
  cod_cliente?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof empresas {
    empresas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      unique: "empresasxcodigo"
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    categoria_iva: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ingresos_brutos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    inicio_actividad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    usa_fiscal: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_externo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_localidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    codigo_postal: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    conv_multilateral: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    agente_retencion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    nombre_1: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    numero_cai: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true,
      defaultValue: 0
    },
    vencimiento_cai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    email: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    agente_percepcion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'empresas',
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
        name: "empresasxcodigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
        ]
      },
    ]
  });
  return empresas;
  }
}
