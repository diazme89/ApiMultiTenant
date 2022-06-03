import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface indice_de_preciosAttributes {
  id: number;
  periodo: string;
  indice: number;
}

export type indice_de_preciosPk = "id";
export type indice_de_preciosId = indice_de_precios[indice_de_preciosPk];
export type indice_de_preciosCreationAttributes = Optional<indice_de_preciosAttributes, indice_de_preciosPk>;

export class indice_de_precios extends Model<indice_de_preciosAttributes, indice_de_preciosCreationAttributes> implements indice_de_preciosAttributes {
  id!: number;
  periodo!: string;
  indice!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof indice_de_precios {
    indice_de_precios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    periodo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    indice: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'indice_de_precios',
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
  return indice_de_precios;
  }
}
