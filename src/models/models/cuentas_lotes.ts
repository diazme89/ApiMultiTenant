import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_lotesAttributes {
  id: number;
  codcuenta: number;
  subcodigo: number;
  codlote: number;
  porcentaje?: number;
}

export type cuentas_lotesPk = "id";
export type cuentas_lotesId = cuentas_lotes[cuentas_lotesPk];
export type cuentas_lotesCreationAttributes = Optional<cuentas_lotesAttributes, cuentas_lotesPk>;

export class cuentas_lotes extends Model<cuentas_lotesAttributes, cuentas_lotesCreationAttributes> implements cuentas_lotesAttributes {
  id!: number;
  codcuenta!: number;
  subcodigo!: number;
  codlote!: number;
  porcentaje?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_lotes {
    cuentas_lotes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codcuenta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    subcodigo: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    codlote: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    porcentaje: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_lotes',
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
  return cuentas_lotes;
  }
}
