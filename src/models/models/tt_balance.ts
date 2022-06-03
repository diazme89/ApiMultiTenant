import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_balanceAttributes {
  id: number;
  cuenta_madre: number;
  descripcion: string;
  tot_debe?: number;
  tot_haber?: number;
  saldo_deudor?: number;
  saldo_acreedor?: number;
  estado?: string;
  imputable?: string;
  tipo?: string;
  nivel?: number;
  idproc?: number;
  fecha_alta?: Date;
  nivel1?: number;
  nivel2?: number;
  nivel3?: number;
  nivel4?: number;
  nivel5?: number;
  nivel6?: number;
  nivel7?: number;
  nivel8?: number;
}

export type tt_balancePk = "id";
export type tt_balanceId = tt_balance[tt_balancePk];
export type tt_balanceCreationAttributes = Optional<tt_balanceAttributes, tt_balancePk>;

export class tt_balance extends Model<tt_balanceAttributes, tt_balanceCreationAttributes> implements tt_balanceAttributes {
  id!: number;
  cuenta_madre!: number;
  descripcion!: string;
  tot_debe?: number;
  tot_haber?: number;
  saldo_deudor?: number;
  saldo_acreedor?: number;
  estado?: string;
  imputable?: string;
  tipo?: string;
  nivel?: number;
  idproc?: number;
  fecha_alta?: Date;
  nivel1?: number;
  nivel2?: number;
  nivel3?: number;
  nivel4?: number;
  nivel5?: number;
  nivel6?: number;
  nivel7?: number;
  nivel8?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_balance {
    tt_balance.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    tot_debe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    tot_haber: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo_deudor: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo_acreedor: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    imputable: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    nivel1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel3: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel4: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel5: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel6: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel7: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    nivel8: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_balance',
    timestamps: false,
    indexes: [
      {
        name: "tt_balance_id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tt_balance_cuenta_madre",
        using: "BTREE",
        fields: [
          { name: "cuenta_madre" },
        ]
      },
      {
        name: "tt_balance_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "idproc_cuenta_madre",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cuenta_madre" },
        ]
      },
      {
        name: "idproc_id",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id" },
        ]
      },
    ]
  });
  return tt_balance;
  }
}
