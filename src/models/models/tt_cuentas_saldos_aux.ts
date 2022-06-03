import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cuentas_saldos_auxAttributes {
  id: number;
  id_cuenta?: number;
  debe?: number;
  haber?: number;
  idproc?: number;
  fecha_alta?: Date;
  cod_empresa?: number;
}

export type tt_cuentas_saldos_auxPk = "id";
export type tt_cuentas_saldos_auxId = tt_cuentas_saldos_aux[tt_cuentas_saldos_auxPk];
export type tt_cuentas_saldos_auxCreationAttributes = Optional<tt_cuentas_saldos_auxAttributes, tt_cuentas_saldos_auxPk>;

export class tt_cuentas_saldos_aux extends Model<tt_cuentas_saldos_auxAttributes, tt_cuentas_saldos_auxCreationAttributes> implements tt_cuentas_saldos_auxAttributes {
  id!: number;
  id_cuenta?: number;
  debe?: number;
  haber?: number;
  idproc?: number;
  fecha_alta?: Date;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cuentas_saldos_aux {
    tt_cuentas_saldos_aux.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cuentas_saldos_aux',
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
        name: "tt_cuentas_saldos_aux_xidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id_cuenta" },
        ]
      },
    ]
  });
  return tt_cuentas_saldos_aux;
  }
}
