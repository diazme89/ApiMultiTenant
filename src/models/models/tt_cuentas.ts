import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cuentasAttributes {
  id: number;
  idproc: number;
  id_cuenta: number;
  seleccion?: number;
  grupo?: string;
  fecha_alta?: Date;
  nombre?: string;
  tipo_cotizacion?: string;
}

export type tt_cuentasPk = "id";
export type tt_cuentasId = tt_cuentas[tt_cuentasPk];
export type tt_cuentasCreationAttributes = Optional<tt_cuentasAttributes, tt_cuentasPk>;

export class tt_cuentas extends Model<tt_cuentasAttributes, tt_cuentasCreationAttributes> implements tt_cuentasAttributes {
  id!: number;
  idproc!: number;
  id_cuenta!: number;
  seleccion?: number;
  grupo?: string;
  fecha_alta?: Date;
  nombre?: string;
  tipo_cotizacion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cuentas {
    tt_cuentas.init({
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
    id_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    seleccion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tipo_cotizacion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cuentas',
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
        name: "tt_cuentas_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id_cuenta" },
          { name: "grupo" },
        ]
      },
    ]
  });
  return tt_cuentas;
  }
}
