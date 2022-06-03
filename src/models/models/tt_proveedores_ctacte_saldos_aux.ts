import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_proveedores_ctacte_saldos_auxAttributes {
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

export type tt_proveedores_ctacte_saldos_auxPk = "id";
export type tt_proveedores_ctacte_saldos_auxId = tt_proveedores_ctacte_saldos_aux[tt_proveedores_ctacte_saldos_auxPk];
export type tt_proveedores_ctacte_saldos_auxCreationAttributes = Optional<tt_proveedores_ctacte_saldos_auxAttributes, tt_proveedores_ctacte_saldos_auxPk>;

export class tt_proveedores_ctacte_saldos_aux extends Model<tt_proveedores_ctacte_saldos_auxAttributes, tt_proveedores_ctacte_saldos_auxCreationAttributes> implements tt_proveedores_ctacte_saldos_auxAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_proveedores_ctacte_saldos_aux {
    tt_proveedores_ctacte_saldos_aux.init({
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
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_proveedores_ctacte_saldos_aux',
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
        name: "tt_proveedores_ctacte_saldos_aux_xpro",
        using: "BTREE",
        fields: [
          { name: "codigo" },
          { name: "empresa" },
          { name: "idproc" },
        ]
      },
      {
        name: "tt_proveedores_ctacte_saldos_aux_xcli_2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_proveedores_ctacte_saldos_aux;
  }
}
