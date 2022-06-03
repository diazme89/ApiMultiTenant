import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_balance_tempAttributes {
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
  fecha_alta?: Date;
}

export type tt_balance_tempPk = "id";
export type tt_balance_tempId = tt_balance_temp[tt_balance_tempPk];
export type tt_balance_tempCreationAttributes = Optional<tt_balance_tempAttributes, tt_balance_tempPk>;

export class tt_balance_temp extends Model<tt_balance_tempAttributes, tt_balance_tempCreationAttributes> implements tt_balance_tempAttributes {
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
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_balance_temp {
    tt_balance_temp.init({
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
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_balance_temp',
    timestamps: false,
    indexes: [
      {
        name: "tt_balance_cuenta_madre",
        using: "BTREE",
        fields: [
          { name: "cuenta_madre" },
        ]
      },
    ]
  });
  return tt_balance_temp;
  }
}
