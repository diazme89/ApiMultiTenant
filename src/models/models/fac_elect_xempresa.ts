import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface fac_elect_xempresaAttributes {
  id: number;
  cod_empresa: number;
  usa_factelect: number;
  usa_factelect_exportacion: number;
  modo_factelect: number;
  clave_certificado_digital: string;
  punto_venta_afip: number;
  usa_nomenclador_comun?: string;
  registracion_automatica?: string;
}

export type fac_elect_xempresaPk = "id";
export type fac_elect_xempresaId = fac_elect_xempresa[fac_elect_xempresaPk];
export type fac_elect_xempresaCreationAttributes = Optional<fac_elect_xempresaAttributes, fac_elect_xempresaPk>;

export class fac_elect_xempresa extends Model<fac_elect_xempresaAttributes, fac_elect_xempresaCreationAttributes> implements fac_elect_xempresaAttributes {
  id!: number;
  cod_empresa!: number;
  usa_factelect!: number;
  usa_factelect_exportacion!: number;
  modo_factelect!: number;
  clave_certificado_digital!: string;
  punto_venta_afip!: number;
  usa_nomenclador_comun?: string;
  registracion_automatica?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof fac_elect_xempresa {
    fac_elect_xempresa.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "fac_elect_xempresa_key1"
    },
    usa_factelect: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    usa_factelect_exportacion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    modo_factelect: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    clave_certificado_digital: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    punto_venta_afip: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    usa_nomenclador_comun: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    registracion_automatica: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fac_elect_xempresa',
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
        name: "fac_elect_xempresa_key1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
        ]
      },
    ]
  });
  return fac_elect_xempresa;
  }
}
