import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_clientesAttributes {
  id: number;
  idproc: number;
  id_cliente: number;
  cod_cliente?: number;
  seleccion?: number;
  fecha_alta?: Date;
  saldo_debe?: number;
  saldo_haber?: number;
  fecha_consulta?: Date;
}

export type tt_clientesPk = "id";
export type tt_clientesId = tt_clientes[tt_clientesPk];
export type tt_clientesCreationAttributes = Optional<tt_clientesAttributes, tt_clientesPk>;

export class tt_clientes extends Model<tt_clientesAttributes, tt_clientesCreationAttributes> implements tt_clientesAttributes {
  id!: number;
  idproc!: number;
  id_cliente!: number;
  cod_cliente?: number;
  seleccion?: number;
  fecha_alta?: Date;
  saldo_debe?: number;
  saldo_haber?: number;
  fecha_consulta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_clientes {
    tt_clientes.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    seleccion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    saldo_debe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    saldo_haber: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    fecha_consulta: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_clientes',
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
        name: "tt_clientes_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return tt_clientes;
  }
}
