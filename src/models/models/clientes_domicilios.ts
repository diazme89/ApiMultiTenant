import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_domiciliosAttributes {
  id: number;
  cod_cliente: number;
  cod_domicilio: number;
  domicilio?: string;
  predefinido?: string;
  num_telefono?: string;
  num_contacto?: string;
}

export type clientes_domiciliosPk = "id";
export type clientes_domiciliosId = clientes_domicilios[clientes_domiciliosPk];
export type clientes_domiciliosCreationAttributes = Optional<clientes_domiciliosAttributes, clientes_domiciliosPk>;

export class clientes_domicilios extends Model<clientes_domiciliosAttributes, clientes_domiciliosCreationAttributes> implements clientes_domiciliosAttributes {
  id!: number;
  cod_cliente!: number;
  cod_domicilio!: number;
  domicilio?: string;
  predefinido?: string;
  num_telefono?: string;
  num_contacto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_domicilios {
    clientes_domicilios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_domicilio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    domicilio: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    predefinido: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    num_telefono: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    num_contacto: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes_domicilios',
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
  return clientes_domicilios;
  }
}
