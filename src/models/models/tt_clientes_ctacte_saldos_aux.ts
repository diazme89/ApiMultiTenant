import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_clientes_ctacte_saldos_auxAttributes {
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
  idproc?: number;
}

export type tt_clientes_ctacte_saldos_auxPk = "id";
export type tt_clientes_ctacte_saldos_auxId = tt_clientes_ctacte_saldos_aux[tt_clientes_ctacte_saldos_auxPk];
export type tt_clientes_ctacte_saldos_auxCreationAttributes = Optional<tt_clientes_ctacte_saldos_auxAttributes, tt_clientes_ctacte_saldos_auxPk>;

export class tt_clientes_ctacte_saldos_aux extends Model<tt_clientes_ctacte_saldos_auxAttributes, tt_clientes_ctacte_saldos_auxCreationAttributes> implements tt_clientes_ctacte_saldos_auxAttributes {
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
  idproc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_clientes_ctacte_saldos_aux {
    tt_clientes_ctacte_saldos_aux.init({
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
      type: DataTypes.DECIMAL(18,2),
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
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_clientes_ctacte_saldos_aux',
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
        name: "tt_clientes_ctacte_saldos_aux_xcli",
        using: "BTREE",
        fields: [
          { name: "codigo" },
          { name: "empresa" },
          { name: "idproc" },
        ]
      },
      {
        name: "tt_clientes_ctacte_saldos_aux_xcli_2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "tt_clientes_ctacte_saldos_aux_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_clientes_ctacte_saldos_aux;
  }
}
