import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface presupuestosAttributes {
  id: number;
  fecha?: string;
  numero?: number;
  cod_cliente?: number;
  detalle?: string;
  tipo?: string;
}

export type presupuestosPk = "id";
export type presupuestosId = presupuestos[presupuestosPk];
export type presupuestosCreationAttributes = Optional<presupuestosAttributes, presupuestosPk>;

export class presupuestos extends Model<presupuestosAttributes, presupuestosCreationAttributes> implements presupuestosAttributes {
  id!: number;
  fecha?: string;
  numero?: number;
  cod_cliente?: number;
  detalle?: string;
  tipo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof presupuestos {
    presupuestos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    detalle: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'presupuestos',
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
      {
        name: "presupuestos_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return presupuestos;
  }
}
