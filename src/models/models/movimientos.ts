import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface movimientosAttributes {
  id: number;
  fecha?: string;
  id_cuenta?: number;
  importe?: number;
  proveedor?: string;
  observacion?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type movimientosPk = "id";
export type movimientosId = movimientos[movimientosPk];
export type movimientosCreationAttributes = Optional<movimientosAttributes, movimientosPk>;

export class movimientos extends Model<movimientosAttributes, movimientosCreationAttributes> implements movimientosAttributes {
  id!: number;
  fecha?: string;
  id_cuenta?: number;
  importe?: number;
  proveedor?: string;
  observacion?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof movimientos {
    movimientos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    observacion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movimientos',
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
  return movimientos;
  }
}
