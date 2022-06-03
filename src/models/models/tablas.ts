import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tablasAttributes {
  nombre: string;
  descripcion: string;
}

export type tablasPk = "nombre";
export type tablasId = tablas[tablasPk];
export type tablasCreationAttributes = Optional<tablasAttributes, tablasPk>;

export class tablas extends Model<tablasAttributes, tablasCreationAttributes> implements tablasAttributes {
  nombre!: string;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tablas {
    tablas.init({
    nombre: {
      type: DataTypes.CHAR(60),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tablas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
    ]
  });
  return tablas;
  }
}
