import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface destino_preciosAttributes {
  id: number;
  cod_dest: number;
  cod_area: number;
  precio?: number;
}

export type destino_preciosPk = "id";
export type destino_preciosId = destino_precios[destino_preciosPk];
export type destino_preciosCreationAttributes = Optional<destino_preciosAttributes, destino_preciosPk>;

export class destino_precios extends Model<destino_preciosAttributes, destino_preciosCreationAttributes> implements destino_preciosAttributes {
  id!: number;
  cod_dest!: number;
  cod_area!: number;
  precio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof destino_precios {
    destino_precios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_dest: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_area: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'destino_precios',
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
        name: "destino_precios_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return destino_precios;
  }
}
