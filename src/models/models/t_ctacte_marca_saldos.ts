import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_ctacte_marca_saldosAttributes {
  id: number;
  codigo?: number;
  cod_empresa?: number;
  tipo?: string;
  actualiza_saldo?: number;
  fecha_consulta?: Date;
  tag?: string;
}

export type t_ctacte_marca_saldosPk = "id";
export type t_ctacte_marca_saldosId = t_ctacte_marca_saldos[t_ctacte_marca_saldosPk];
export type t_ctacte_marca_saldosCreationAttributes = Optional<t_ctacte_marca_saldosAttributes, t_ctacte_marca_saldosPk>;

export class t_ctacte_marca_saldos extends Model<t_ctacte_marca_saldosAttributes, t_ctacte_marca_saldosCreationAttributes> implements t_ctacte_marca_saldosAttributes {
  id!: number;
  codigo?: number;
  cod_empresa?: number;
  tipo?: string;
  actualiza_saldo?: number;
  fecha_consulta?: Date;
  tag?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_ctacte_marca_saldos {
    t_ctacte_marca_saldos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    actualiza_saldo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_consulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 't_ctacte_marca_saldos',
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
        name: "t_ctacte_marca_saldos_1",
        using: "BTREE",
        fields: [
          { name: "codigo" },
          { name: "cod_empresa" },
          { name: "tipo" },
        ]
      },
    ]
  });
  return t_ctacte_marca_saldos;
  }
}
