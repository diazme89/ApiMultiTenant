import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface destinos_stockAttributes {
  codigo?: number;
  nombre?: string;
  id: number;
  codexterno?: string;
}

export type destinos_stockPk = "id";
export type destinos_stockId = destinos_stock[destinos_stockPk];
export type destinos_stockCreationAttributes = Optional<destinos_stockAttributes, destinos_stockPk>;

export class destinos_stock extends Model<destinos_stockAttributes, destinos_stockCreationAttributes> implements destinos_stockAttributes {
  codigo?: number;
  nombre?: string;
  id!: number;
  codexterno?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof destinos_stock {
    destinos_stock.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codexterno: {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'destinos_stock',
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
  return destinos_stock;
  }
}
