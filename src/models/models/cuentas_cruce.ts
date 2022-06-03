import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_cruceAttributes {
  id: number;
  cod_cuenta: number;
  tipo: string;
}

export type cuentas_crucePk = "id";
export type cuentas_cruceId = cuentas_cruce[cuentas_crucePk];
export type cuentas_cruceCreationAttributes = Optional<cuentas_cruceAttributes, cuentas_crucePk>;

export class cuentas_cruce extends Model<cuentas_cruceAttributes, cuentas_cruceCreationAttributes> implements cuentas_cruceAttributes {
  id!: number;
  cod_cuenta!: number;
  tipo!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_cruce {
    cuentas_cruce.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    tipo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cuentas_cruce',
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
  return cuentas_cruce;
  }
}
