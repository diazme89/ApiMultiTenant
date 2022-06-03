import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_proveedores_marca_saldosAttributes {
  id: number;
  cod_proveedor?: number;
  cod_empresa?: number;
  actualiza_saldo?: number;
}

export type t_proveedores_marca_saldosPk = "id";
export type t_proveedores_marca_saldosId = t_proveedores_marca_saldos[t_proveedores_marca_saldosPk];
export type t_proveedores_marca_saldosCreationAttributes = Optional<t_proveedores_marca_saldosAttributes, t_proveedores_marca_saldosPk>;

export class t_proveedores_marca_saldos extends Model<t_proveedores_marca_saldosAttributes, t_proveedores_marca_saldosCreationAttributes> implements t_proveedores_marca_saldosAttributes {
  id!: number;
  cod_proveedor?: number;
  cod_empresa?: number;
  actualiza_saldo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_proveedores_marca_saldos {
    t_proveedores_marca_saldos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    actualiza_saldo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_proveedores_marca_saldos',
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
  return t_proveedores_marca_saldos;
  }
}
