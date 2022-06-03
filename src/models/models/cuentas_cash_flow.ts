import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_cash_flowAttributes {
  id: number;
  nombre?: string;
  cod_cuenta?: number;
  tipo?: string;
  orden?: number;
}

export type cuentas_cash_flowPk = "id";
export type cuentas_cash_flowId = cuentas_cash_flow[cuentas_cash_flowPk];
export type cuentas_cash_flowCreationAttributes = Optional<cuentas_cash_flowAttributes, cuentas_cash_flowPk>;

export class cuentas_cash_flow extends Model<cuentas_cash_flowAttributes, cuentas_cash_flowCreationAttributes> implements cuentas_cash_flowAttributes {
  id!: number;
  nombre?: string;
  cod_cuenta?: number;
  tipo?: string;
  orden?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_cash_flow {
    cuentas_cash_flow.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_cash_flow',
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
  return cuentas_cash_flow;
  }
}
