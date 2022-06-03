import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_articulosAttributes {
  id: number;
  cod_punto?: number;
  cod_articulo?: number;
  porcentaje?: number;
}

export type puntos_articulosPk = "id";
export type puntos_articulosId = puntos_articulos[puntos_articulosPk];
export type puntos_articulosCreationAttributes = Optional<puntos_articulosAttributes, puntos_articulosPk>;

export class puntos_articulos extends Model<puntos_articulosAttributes, puntos_articulosCreationAttributes> implements puntos_articulosAttributes {
  id!: number;
  cod_punto?: number;
  cod_articulo?: number;
  porcentaje?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_articulos {
    puntos_articulos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_punto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_articulos',
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
  return puntos_articulos;
  }
}
