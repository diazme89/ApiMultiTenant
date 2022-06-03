import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_predefinidasAttributes {
  descrip?: string;
  id: number;
  tipo_cuenta?: string;
}

export type cuentas_predefinidasPk = "id";
export type cuentas_predefinidasId = cuentas_predefinidas[cuentas_predefinidasPk];
export type cuentas_predefinidasCreationAttributes = Optional<cuentas_predefinidasAttributes, cuentas_predefinidasPk>;

export class cuentas_predefinidas extends Model<cuentas_predefinidasAttributes, cuentas_predefinidasCreationAttributes> implements cuentas_predefinidasAttributes {
  descrip?: string;
  id!: number;
  tipo_cuenta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_predefinidas {
    cuentas_predefinidas.init({
    descrip: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_cuenta: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas_predefinidas',
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
  return cuentas_predefinidas;
  }
}
