import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface conf_colores_deudasAttributes {
  id: number;
  desde?: number;
  hasta?: number;
}

export type conf_colores_deudasPk = "id";
export type conf_colores_deudasId = conf_colores_deudas[conf_colores_deudasPk];
export type conf_colores_deudasCreationAttributes = Optional<conf_colores_deudasAttributes, conf_colores_deudasPk>;

export class conf_colores_deudas extends Model<conf_colores_deudasAttributes, conf_colores_deudasCreationAttributes> implements conf_colores_deudasAttributes {
  id!: number;
  desde?: number;
  hasta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof conf_colores_deudas {
    conf_colores_deudas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    desde: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conf_colores_deudas',
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
  return conf_colores_deudas;
  }
}
