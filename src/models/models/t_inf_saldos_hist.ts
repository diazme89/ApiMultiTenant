import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_inf_saldos_histAttributes {
  id: number;
  fecha?: string;
  clave?: string;
  importe?: number;
}

export type t_inf_saldos_histPk = "id";
export type t_inf_saldos_histId = t_inf_saldos_hist[t_inf_saldos_histPk];
export type t_inf_saldos_histCreationAttributes = Optional<t_inf_saldos_histAttributes, t_inf_saldos_histPk>;

export class t_inf_saldos_hist extends Model<t_inf_saldos_histAttributes, t_inf_saldos_histCreationAttributes> implements t_inf_saldos_histAttributes {
  id!: number;
  fecha?: string;
  clave?: string;
  importe?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_inf_saldos_hist {
    t_inf_saldos_hist.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_inf_saldos_hist',
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
        name: "t_inf_saldos_histxfecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "t_inf_saldos_histxclave",
        using: "BTREE",
        fields: [
          { name: "clave" },
        ]
      },
    ]
  });
  return t_inf_saldos_hist;
  }
}
