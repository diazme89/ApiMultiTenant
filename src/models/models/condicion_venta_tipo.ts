import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface condicion_venta_tipoAttributes {
  id: number;
  codigo: number;
  descripcion: string;
}

export type condicion_venta_tipoPk = "id";
export type condicion_venta_tipoId = condicion_venta_tipo[condicion_venta_tipoPk];
export type condicion_venta_tipoCreationAttributes = Optional<condicion_venta_tipoAttributes, condicion_venta_tipoPk>;

export class condicion_venta_tipo extends Model<condicion_venta_tipoAttributes, condicion_venta_tipoCreationAttributes> implements condicion_venta_tipoAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof condicion_venta_tipo {
    condicion_venta_tipo.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'condicion_venta_tipo',
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
  return condicion_venta_tipo;
  }
}
