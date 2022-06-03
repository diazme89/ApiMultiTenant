import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_impuestosAttributes {
  id: number;
  cod_impuesto?: number;
  cod_cliente?: number;
  percepcion_porc?: number;
  fecha?: string;
  categoria?: string;
  inscripto?: string;
}

export type clientes_impuestosPk = "id";
export type clientes_impuestosId = clientes_impuestos[clientes_impuestosPk];
export type clientes_impuestosCreationAttributes = Optional<clientes_impuestosAttributes, clientes_impuestosPk>;

export class clientes_impuestos extends Model<clientes_impuestosAttributes, clientes_impuestosCreationAttributes> implements clientes_impuestosAttributes {
  id!: number;
  cod_impuesto?: number;
  cod_cliente?: number;
  percepcion_porc?: number;
  fecha?: string;
  categoria?: string;
  inscripto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_impuestos {
    clientes_impuestos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_impuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    percepcion_porc: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    categoria: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    inscripto: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'clientes_impuestos',
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
  return clientes_impuestos;
  }
}
