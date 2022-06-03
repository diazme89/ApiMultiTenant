import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentas_predef_ganaderiaAttributes {
  descrip?: string;
  id: number;
  tipo_cuenta?: string;
}

export type cuentas_predef_ganaderiaPk = "id";
export type cuentas_predef_ganaderiaId = cuentas_predef_ganaderia[cuentas_predef_ganaderiaPk];
export type cuentas_predef_ganaderiaCreationAttributes = Optional<cuentas_predef_ganaderiaAttributes, cuentas_predef_ganaderiaPk>;

export class cuentas_predef_ganaderia extends Model<cuentas_predef_ganaderiaAttributes, cuentas_predef_ganaderiaCreationAttributes> implements cuentas_predef_ganaderiaAttributes {
  descrip?: string;
  id!: number;
  tipo_cuenta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas_predef_ganaderia {
    cuentas_predef_ganaderia.init({
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
    tableName: 'cuentas_predef_ganaderia',
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
  return cuentas_predef_ganaderia;
  }
}
