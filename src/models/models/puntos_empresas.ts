import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_empresasAttributes {
  id: number;
  cod_punto?: number;
  cod_empresa?: number;
}

export type puntos_empresasPk = "id";
export type puntos_empresasId = puntos_empresas[puntos_empresasPk];
export type puntos_empresasCreationAttributes = Optional<puntos_empresasAttributes, puntos_empresasPk>;

export class puntos_empresas extends Model<puntos_empresasAttributes, puntos_empresasCreationAttributes> implements puntos_empresasAttributes {
  id!: number;
  cod_punto?: number;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_empresas {
    puntos_empresas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_punto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_empresas',
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
  return puntos_empresas;
  }
}
