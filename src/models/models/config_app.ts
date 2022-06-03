import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_appAttributes {
  id: number;
  cod_app?: number;
  codigo?: number;
  nombre?: string;
  valor?: string;
}

export type config_appPk = "id";
export type config_appId = config_app[config_appPk];
export type config_appCreationAttributes = Optional<config_appAttributes, config_appPk>;

export class config_app extends Model<config_appAttributes, config_appCreationAttributes> implements config_appAttributes {
  id!: number;
  cod_app?: number;
  codigo?: number;
  nombre?: string;
  valor?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_app {
    config_app.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_app: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    valor: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'config_app',
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
  return config_app;
  }
}
