import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_disponibilidadesAttributes {
  id: number;
  cod_cuenta?: number;
  tipo?: string;
  cbu?: string;
  tipo_cuenta?: string;
  alias?: string;
}

export type cuentas_disponibilidadesPk = "id";
export type cuentas_disponibilidadesId = cuentas_disponibilidades[cuentas_disponibilidadesPk];
export type cuentas_disponibilidadesCreationAttributes = Optional<cuentas_disponibilidadesAttributes, cuentas_disponibilidadesPk>;

export class cuentas_disponibilidades extends Model<cuentas_disponibilidadesAttributes, cuentas_disponibilidadesCreationAttributes> implements cuentas_disponibilidadesAttributes {
  id!: number;
  cod_cuenta?: number;
  tipo?: string;
  cbu?: string;
  tipo_cuenta?: string;
  alias?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_disponibilidades {
    cuentas_disponibilidades.init({
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
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cbu: {
      type: DataTypes.CHAR(22),
      allowNull: true
    },
    tipo_cuenta: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    alias: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_disponibilidades',
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
  return cuentas_disponibilidades;
  }
}
