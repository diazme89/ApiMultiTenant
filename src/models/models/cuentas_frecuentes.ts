import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_frecuentesAttributes {
  id: number;
  cod_cuenta?: number;
  tipo?: string;
}

export type cuentas_frecuentesPk = "id";
export type cuentas_frecuentesId = cuentas_frecuentes[cuentas_frecuentesPk];
export type cuentas_frecuentesCreationAttributes = Optional<cuentas_frecuentesAttributes, cuentas_frecuentesPk>;

export class cuentas_frecuentes extends Model<cuentas_frecuentesAttributes, cuentas_frecuentesCreationAttributes> implements cuentas_frecuentesAttributes {
  id!: number;
  cod_cuenta?: number;
  tipo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_frecuentes {
    cuentas_frecuentes.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_frecuentes',
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
  return cuentas_frecuentes;
  }
}
