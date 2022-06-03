import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface registros_borradosAttributes {
  id: number;
  orden_sql?: string;
}

export type registros_borradosPk = "id";
export type registros_borradosId = registros_borrados[registros_borradosPk];
export type registros_borradosCreationAttributes = Optional<registros_borradosAttributes, registros_borradosPk>;

export class registros_borrados extends Model<registros_borradosAttributes, registros_borradosCreationAttributes> implements registros_borradosAttributes {
  id!: number;
  orden_sql?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof registros_borrados {
    registros_borrados.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    orden_sql: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registros_borrados',
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
  return registros_borrados;
  }
}
