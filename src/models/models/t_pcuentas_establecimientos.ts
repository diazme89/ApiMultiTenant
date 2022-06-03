import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_pcuentas_establecimientosAttributes {
  id: number;
  cod_cuenta?: number;
  cod_establecimiento?: number;
  cod_contabilidad?: number;
  cod_empresa?: number;
  cod_unidad_negocio?: number;
}

export type t_pcuentas_establecimientosPk = "id";
export type t_pcuentas_establecimientosId = t_pcuentas_establecimientos[t_pcuentas_establecimientosPk];
export type t_pcuentas_establecimientosCreationAttributes = Optional<t_pcuentas_establecimientosAttributes, t_pcuentas_establecimientosPk>;

export class t_pcuentas_establecimientos extends Model<t_pcuentas_establecimientosAttributes, t_pcuentas_establecimientosCreationAttributes> implements t_pcuentas_establecimientosAttributes {
  id!: number;
  cod_cuenta?: number;
  cod_establecimiento?: number;
  cod_contabilidad?: number;
  cod_empresa?: number;
  cod_unidad_negocio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_pcuentas_establecimientos {
    t_pcuentas_establecimientos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_contabilidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_pcuentas_establecimientos',
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
  return t_pcuentas_establecimientos;
  }
}
