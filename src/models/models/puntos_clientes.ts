import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_clientesAttributes {
  id: number;
  cod_punto?: number;
  cod_cliente?: number;
  clave?: string;
  dni?: string;
  fecha?: string;
  hora?: string;
}

export type puntos_clientesPk = "id";
export type puntos_clientesId = puntos_clientes[puntos_clientesPk];
export type puntos_clientesCreationAttributes = Optional<puntos_clientesAttributes, puntos_clientesPk>;

export class puntos_clientes extends Model<puntos_clientesAttributes, puntos_clientesCreationAttributes> implements puntos_clientesAttributes {
  id!: number;
  cod_punto?: number;
  cod_cliente?: number;
  clave?: string;
  dni?: string;
  fecha?: string;
  hora?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_clientes {
    puntos_clientes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_punto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_clientes',
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
        name: "idx_cod_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return puntos_clientes;
  }
}
