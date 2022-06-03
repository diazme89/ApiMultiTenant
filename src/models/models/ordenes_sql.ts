import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordenes_sqlAttributes {
  id: number;
  usuario?: string;
  fecha?: string;
  orden?: string;
}

export type ordenes_sqlPk = "id";
export type ordenes_sqlId = ordenes_sql[ordenes_sqlPk];
export type ordenes_sqlCreationAttributes = Optional<ordenes_sqlAttributes, ordenes_sqlPk>;

export class ordenes_sql extends Model<ordenes_sqlAttributes, ordenes_sqlCreationAttributes> implements ordenes_sqlAttributes {
  id!: number;
  usuario?: string;
  fecha?: string;
  orden?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ordenes_sql {
    ordenes_sql.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orden: {
      type: DataTypes.STRING(3000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordenes_sql',
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
  return ordenes_sql;
  }
}
