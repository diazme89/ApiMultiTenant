import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_seguimientoAttributes {
  id: number;
  cod_cliente?: number;
  fecha?: string;
  detalle?: string;
  proxima_llamada?: string;
}

export type clientes_seguimientoPk = "id";
export type clientes_seguimientoId = clientes_seguimiento[clientes_seguimientoPk];
export type clientes_seguimientoCreationAttributes = Optional<clientes_seguimientoAttributes, clientes_seguimientoPk>;

export class clientes_seguimiento extends Model<clientes_seguimientoAttributes, clientes_seguimientoCreationAttributes> implements clientes_seguimientoAttributes {
  id!: number;
  cod_cliente?: number;
  fecha?: string;
  detalle?: string;
  proxima_llamada?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_seguimiento {
    clientes_seguimiento.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    proxima_llamada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes_seguimiento',
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
  return clientes_seguimiento;
  }
}
