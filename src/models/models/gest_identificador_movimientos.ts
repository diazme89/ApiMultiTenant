import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface gest_identificador_movimientosAttributes {
  id: number;
  id_gest_identificador: number;
  id_item_relacionado: number;
}

export type gest_identificador_movimientosPk = "id";
export type gest_identificador_movimientosId = gest_identificador_movimientos[gest_identificador_movimientosPk];
export type gest_identificador_movimientosCreationAttributes = Optional<gest_identificador_movimientosAttributes, gest_identificador_movimientosPk>;

export class gest_identificador_movimientos extends Model<gest_identificador_movimientosAttributes, gest_identificador_movimientosCreationAttributes> implements gest_identificador_movimientosAttributes {
  id!: number;
  id_gest_identificador!: number;
  id_item_relacionado!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof gest_identificador_movimientos {
    gest_identificador_movimientos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_gest_identificador: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_item_relacionado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gest_identificador_movimientos',
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
        name: "idx_id_gest_identificador",
        using: "BTREE",
        fields: [
          { name: "id_gest_identificador" },
        ]
      },
      {
        name: "idx_id_item_relacionado",
        using: "BTREE",
        fields: [
          { name: "id_item_relacionado" },
        ]
      },
    ]
  });
  return gest_identificador_movimientos;
  }
}
