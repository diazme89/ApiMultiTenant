import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_configAttributes {
  id: number;
  cod_empresa?: number;
  id_destino?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;
  cod_cliente?: number;
  cod_cuenta?: number;
  tag?: string;
  tipo_comprobante?: string;
  punto_de_venta?: number;
  observaciones?: string;
  tipo_presupuesto?: string;
  cod_vendedor?: number;
  access_token_mp?: string;
  publishkey_mp?: string;
}

export type ec_configPk = "id";
export type ec_configId = ec_config[ec_configPk];
export type ec_configCreationAttributes = Optional<ec_configAttributes, ec_configPk>;

export class ec_config extends Model<ec_configAttributes, ec_configCreationAttributes> implements ec_configAttributes {
  id!: number;
  cod_empresa?: number;
  id_destino?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;
  cod_cliente?: number;
  cod_cuenta?: number;
  tag?: string;
  tipo_comprobante?: string;
  punto_de_venta?: number;
  observaciones?: string;
  tipo_presupuesto?: string;
  cod_vendedor?: number;
  access_token_mp?: string;
  publishkey_mp?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_config {
    ec_config.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    id_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tipo_presupuesto: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    access_token_mp: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    publishkey_mp: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_config',
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
  return ec_config;
  }
}
