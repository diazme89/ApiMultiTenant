import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impuestosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_cuenta_contable?: number;
  cod_jurisdiccion?: number;
  aplicativo?: number;
  cod_formula?: number;
  otras_percep?: string;
  codigo_cab?: number;
  cod_libro_iva?: number;
  cod_categoria_aplicativo?: number;
  cod_empresa?: number;
  cabecera_constancia?: string;
}

export type impuestosPk = "id";
export type impuestosId = impuestos[impuestosPk];
export type impuestosCreationAttributes = Optional<impuestosAttributes, impuestosPk>;

export class impuestos extends Model<impuestosAttributes, impuestosCreationAttributes> implements impuestosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_cuenta_contable?: number;
  cod_jurisdiccion?: number;
  aplicativo?: number;
  cod_formula?: number;
  otras_percep?: string;
  codigo_cab?: number;
  cod_libro_iva?: number;
  cod_categoria_aplicativo?: number;
  cod_empresa?: number;
  cabecera_constancia?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof impuestos {
    impuestos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_cuenta_contable: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    aplicativo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cod_formula: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    otras_percep: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    codigo_cab: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_libro_iva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_categoria_aplicativo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 0
    },
    cabecera_constancia: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impuestos',
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
    ]
  });
  return impuestos;
  }
}
