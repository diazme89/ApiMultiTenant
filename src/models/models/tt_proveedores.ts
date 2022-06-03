import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_proveedoresAttributes {
  id: number;
  idproc: number;
  id_proveedor: number;
  cod_proveedor?: number;
  seleccion?: number;
  cod_proveedor_cliente?: number;
  fecha_alta?: Date;
  saldo_debe?: number;
  saldo_haber?: number;
  fecha_consulta?: Date;
}

export type tt_proveedoresPk = "id";
export type tt_proveedoresId = tt_proveedores[tt_proveedoresPk];
export type tt_proveedoresCreationAttributes = Optional<tt_proveedoresAttributes, tt_proveedoresPk>;

export class tt_proveedores extends Model<tt_proveedoresAttributes, tt_proveedoresCreationAttributes> implements tt_proveedoresAttributes {
  id!: number;
  idproc!: number;
  id_proveedor!: number;
  cod_proveedor?: number;
  seleccion?: number;
  cod_proveedor_cliente?: number;
  fecha_alta?: Date;
  saldo_debe?: number;
  saldo_haber?: number;
  fecha_consulta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_proveedores {
    tt_proveedores.init({
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
    id_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    seleccion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_proveedor_cliente: {
      type: DataTypes.DECIMAL(10,0),
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
    tableName: 'tt_proveedores',
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
        name: "tt_proveedores_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_proveedor" },
        ]
      },
    ]
  });
  return tt_proveedores;
  }
}
