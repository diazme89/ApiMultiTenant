import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_ingenioAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
}

export type cuentas_ingenioPk = "id";
export type cuentas_ingenioId = cuentas_ingenio[cuentas_ingenioPk];
export type cuentas_ingenioCreationAttributes = Optional<cuentas_ingenioAttributes, cuentas_ingenioPk>;

export class cuentas_ingenio extends Model<cuentas_ingenioAttributes, cuentas_ingenioCreationAttributes> implements cuentas_ingenioAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_ingenio {
    cuentas_ingenio.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(35),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_ingenio',
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
  return cuentas_ingenio;
  }
}
