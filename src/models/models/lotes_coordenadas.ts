import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lotes_coordenadasAttributes {
  id: number;
  id_lote?: number;
  latitud?: string;
  longitud?: string;
  orden?: number;
}

export type lotes_coordenadasPk = "id";
export type lotes_coordenadasId = lotes_coordenadas[lotes_coordenadasPk];
export type lotes_coordenadasCreationAttributes = Optional<lotes_coordenadasAttributes, lotes_coordenadasPk>;

export class lotes_coordenadas extends Model<lotes_coordenadasAttributes, lotes_coordenadasCreationAttributes> implements lotes_coordenadasAttributes {
  id!: number;
  id_lote?: number;
  latitud?: string;
  longitud?: string;
  orden?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof lotes_coordenadas {
    lotes_coordenadas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_lote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latitud: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    longitud: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lotes_coordenadas',
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
  return lotes_coordenadas;
  }
}
