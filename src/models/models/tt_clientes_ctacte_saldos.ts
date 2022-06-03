import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_clientes_ctacte_saldosAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  categoria_iva?: string;
  cuit?: string;
  domicilio?: string;
  telefonos?: string;
  email?: string;
  saldo?: number;
  empresa?: number;
  tag?: string;
  fecha_alta?: Date;
  saldo2?: number;
}

export type tt_clientes_ctacte_saldosPk = "id";
export type tt_clientes_ctacte_saldosId = tt_clientes_ctacte_saldos[tt_clientes_ctacte_saldosPk];
export type tt_clientes_ctacte_saldosCreationAttributes = Optional<tt_clientes_ctacte_saldosAttributes, tt_clientes_ctacte_saldosPk>;

export class tt_clientes_ctacte_saldos extends Model<tt_clientes_ctacte_saldosAttributes, tt_clientes_ctacte_saldosCreationAttributes> implements tt_clientes_ctacte_saldosAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  categoria_iva?: string;
  cuit?: string;
  domicilio?: string;
  telefonos?: string;
  email?: string;
  saldo?: number;
  empresa?: number;
  tag?: string;
  fecha_alta?: Date;
  saldo2?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_clientes_ctacte_saldos {
    tt_clientes_ctacte_saldos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    categoria_iva: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(18,6),
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
    saldo2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_clientes_ctacte_saldos',
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
        name: "tt_clientes_ctacte_saldos_xcli",
        using: "BTREE",
        fields: [
          { name: "codigo" },
          { name: "empresa" },
        ]
      },
      {
        name: "tt_clientes_ctacte_saldos_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_clientes_ctacte_saldos;
  }
}
