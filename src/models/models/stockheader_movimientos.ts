import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface stockheader_movimientosAttributes {
  id: number;
  codigo: number;
  descripcion: string;
}

export type stockheader_movimientosPk = "id";
export type stockheader_movimientosId = stockheader_movimientos[stockheader_movimientosPk];
export type stockheader_movimientosCreationAttributes = Optional<stockheader_movimientosAttributes, stockheader_movimientosPk>;

export class stockheader_movimientos extends Model<stockheader_movimientosAttributes, stockheader_movimientosCreationAttributes> implements stockheader_movimientosAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof stockheader_movimientos {
    stockheader_movimientos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stockheader_movimientos',
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
  return stockheader_movimientos;
  }
}
