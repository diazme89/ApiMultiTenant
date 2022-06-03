import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes2Attributes {
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
  actualiza_saldo?: number;
  lista_precio?: number;
}

export type clientes2Pk = "id";
export type clientes2Id = clientes2[clientes2Pk];
export type clientes2CreationAttributes = Optional<clientes2Attributes, clientes2Pk>;

export class clientes2 extends Model<clientes2Attributes, clientes2CreationAttributes> implements clientes2Attributes {
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
  actualiza_saldo?: number;
  lista_precio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes2 {
    clientes2.init({
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
    actualiza_saldo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    lista_precio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes2',
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
  return clientes2;
  }
}
