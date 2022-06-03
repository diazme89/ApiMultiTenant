import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_clientesAttributes {
  id: number;
  cod_cliente?: number;
  apellido?: string;
  nombre?: string;
  dni?: string;
  email?: string;
  fecha_nacimiento?: string;
  clave?: string;
  observaciones?: string;
  fecha_alta?: string;
  provincia?: string;
  cod_cliente_infomanager?: number;
  cod_deposito?: number;
}

export type ec_clientesPk = "id";
export type ec_clientesId = ec_clientes[ec_clientesPk];
export type ec_clientesCreationAttributes = Optional<ec_clientesAttributes, ec_clientesPk>;

export class ec_clientes extends Model<ec_clientesAttributes, ec_clientesCreationAttributes> implements ec_clientesAttributes {
  id!: number;
  cod_cliente?: number;
  apellido?: string;
  nombre?: string;
  dni?: string;
  email?: string;
  fecha_nacimiento?: string;
  clave?: string;
  observaciones?: string;
  fecha_alta?: string;
  provincia?: string;
  cod_cliente_infomanager?: number;
  cod_deposito?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_clientes {
    ec_clientes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true,
      unique: "cod_cliente"
    },
    apellido: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    dni: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    clave: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_cliente_infomanager: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_clientes',
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
        name: "cod_cliente",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return ec_clientes;
  }
}
