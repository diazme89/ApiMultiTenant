import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface unidadesAttributes {
  id: number;
  cod_unidad?: number;
  unidad?: string;
}

export type unidadesPk = "id";
export type unidadesId = unidades[unidadesPk];
export type unidadesCreationAttributes = Optional<unidadesAttributes, unidadesPk>;

export class unidades extends Model<unidadesAttributes, unidadesCreationAttributes> implements unidadesAttributes {
  id!: number;
  cod_unidad?: number;
  unidad?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof unidades {
    unidades.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_unidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    unidad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidades',
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
  return unidades;
  }
}
