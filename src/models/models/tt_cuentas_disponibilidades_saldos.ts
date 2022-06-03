import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cuentas_disponibilidades_saldosAttributes {
  id: number;
  cod_cuenta?: number;
  cuenta_madre?: number;
  tipo?: string;
  descripcion?: string;
  tot_debe?: number;
  tot_haber?: number;
  saldo_deudor?: number;
  saldo_acreedor?: number;
  estado?: string;
  imputable?: string;
  unidad_negocio?: number;
  empresa?: number;
  tag?: string;
  fecha_alta?: Date;
  idproc?: number;
}

export type tt_cuentas_disponibilidades_saldosPk = "id";
export type tt_cuentas_disponibilidades_saldosId = tt_cuentas_disponibilidades_saldos[tt_cuentas_disponibilidades_saldosPk];
export type tt_cuentas_disponibilidades_saldosCreationAttributes = Optional<tt_cuentas_disponibilidades_saldosAttributes, tt_cuentas_disponibilidades_saldosPk>;

export class tt_cuentas_disponibilidades_saldos extends Model<tt_cuentas_disponibilidades_saldosAttributes, tt_cuentas_disponibilidades_saldosCreationAttributes> implements tt_cuentas_disponibilidades_saldosAttributes {
  id!: number;
  cod_cuenta?: number;
  cuenta_madre?: number;
  tipo?: string;
  descripcion?: string;
  tot_debe?: number;
  tot_haber?: number;
  saldo_deudor?: number;
  saldo_acreedor?: number;
  estado?: string;
  imputable?: string;
  unidad_negocio?: number;
  empresa?: number;
  tag?: string;
  fecha_alta?: Date;
  idproc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cuentas_disponibilidades_saldos {
    tt_cuentas_disponibilidades_saldos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tot_debe: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    tot_haber: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    saldo_deudor: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    saldo_acreedor: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    imputable: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    unidad_negocio: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    empresa: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cuentas_disponibilidades_saldos',
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
        name: "tt_cuentas_disponibilidades_saldos_xidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_cuentas_disponibilidades_saldos;
  }
}
