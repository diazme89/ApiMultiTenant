import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_destinosAttributes {
  id: number;
  cod_cliente: number;
  cod_destino: number;
}

export type clientes_destinosPk = "id";
export type clientes_destinosId = clientes_destinos[clientes_destinosPk];
export type clientes_destinosCreationAttributes = Optional<clientes_destinosAttributes, clientes_destinosPk>;

export class clientes_destinos extends Model<clientes_destinosAttributes, clientes_destinosCreationAttributes> implements clientes_destinosAttributes {
  id!: number;
  cod_cliente!: number;
  cod_destino!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_destinos {
    clientes_destinos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clientes_destinos',
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
  return clientes_destinos;
  }
}
