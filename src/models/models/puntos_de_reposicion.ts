import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_de_reposicionAttributes {
  id: number;
  cod_articulo: number;
  cod_deposito?: number;
  punto_reposicion: number;
}

export type puntos_de_reposicionPk = "id";
export type puntos_de_reposicionId = puntos_de_reposicion[puntos_de_reposicionPk];
export type puntos_de_reposicionCreationAttributes = Optional<puntos_de_reposicionAttributes, puntos_de_reposicionPk>;

export class puntos_de_reposicion extends Model<puntos_de_reposicionAttributes, puntos_de_reposicionCreationAttributes> implements puntos_de_reposicionAttributes {
  id!: number;
  cod_articulo!: number;
  cod_deposito?: number;
  punto_reposicion!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_de_reposicion {
    puntos_de_reposicion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    punto_reposicion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'puntos_de_reposicion',
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
      {
        name: "idx_art_depo",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
          { name: "cod_deposito" },
        ]
      },
    ]
  });
  return puntos_de_reposicion;
  }
}
