import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_config_circuitosAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
}

export type ec_config_circuitosPk = "id";
export type ec_config_circuitosId = ec_config_circuitos[ec_config_circuitosPk];
export type ec_config_circuitosCreationAttributes = Optional<ec_config_circuitosAttributes, ec_config_circuitosPk>;

export class ec_config_circuitos extends Model<ec_config_circuitosAttributes, ec_config_circuitosCreationAttributes> implements ec_config_circuitosAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_config_circuitos {
    ec_config_circuitos.init({
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
    tableName: 'ec_config_circuitos',
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
  return ec_config_circuitos;
  }
}
