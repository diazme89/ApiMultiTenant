import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_circuitosAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
}

export type config_circuitosPk = "id";
export type config_circuitosId = config_circuitos[config_circuitosPk];
export type config_circuitosCreationAttributes = Optional<config_circuitosAttributes, config_circuitosPk>;

export class config_circuitos extends Model<config_circuitosAttributes, config_circuitosCreationAttributes> implements config_circuitosAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_circuitos {
    config_circuitos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_circuitos',
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
  return config_circuitos;
  }
}
