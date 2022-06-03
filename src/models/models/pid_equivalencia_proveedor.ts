import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pid_equivalencia_proveedorAttributes {
  syn_cod_proveedor: number;
  pid_cod_proveedor: number;
}

export type pid_equivalencia_proveedorPk = "syn_cod_proveedor";
export type pid_equivalencia_proveedorId = pid_equivalencia_proveedor[pid_equivalencia_proveedorPk];
export type pid_equivalencia_proveedorCreationAttributes = Optional<pid_equivalencia_proveedorAttributes, pid_equivalencia_proveedorPk>;

export class pid_equivalencia_proveedor extends Model<pid_equivalencia_proveedorAttributes, pid_equivalencia_proveedorCreationAttributes> implements pid_equivalencia_proveedorAttributes {
  syn_cod_proveedor!: number;
  pid_cod_proveedor!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pid_equivalencia_proveedor {
    pid_equivalencia_proveedor.init({
    syn_cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    pid_cod_proveedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pid_equivalencia_proveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "syn_cod_proveedor" },
        ]
      },
    ]
  });
  return pid_equivalencia_proveedor;
  }
}
