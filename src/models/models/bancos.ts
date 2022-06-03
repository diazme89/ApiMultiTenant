import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bancosAttributes {
  id: number;
  codigo: number;
  nombre: string;
  cuit?: string;
}

export type bancosPk = "id";
export type bancosId = bancos[bancosPk];
export type bancosCreationAttributes = Optional<bancosAttributes, bancosPk>;

export class bancos extends Model<bancosAttributes, bancosCreationAttributes> implements bancosAttributes {
  id!: number;
  codigo!: number;
  nombre!: string;
  cuit?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof bancos {
    bancos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(40),
      allowNull: false
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bancos',
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
  return bancos;
  }
}
