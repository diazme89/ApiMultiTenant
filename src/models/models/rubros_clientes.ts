import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rubros_clientesAttributes {
  id: number;
  cod_rubro_cliente: number;
  descripcion: string;
}

export type rubros_clientesPk = "id";
export type rubros_clientesId = rubros_clientes[rubros_clientesPk];
export type rubros_clientesCreationAttributes = Optional<rubros_clientesAttributes, rubros_clientesPk>;

export class rubros_clientes extends Model<rubros_clientesAttributes, rubros_clientesCreationAttributes> implements rubros_clientesAttributes {
  id!: number;
  cod_rubro_cliente!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof rubros_clientes {
    rubros_clientes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_rubro_cliente: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      unique: "rubros_clientes_key1"
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rubros_clientes',
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
        name: "rubros_clientes_key1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_rubro_cliente" },
        ]
      },
    ]
  });
  return rubros_clientes;
  }
}
