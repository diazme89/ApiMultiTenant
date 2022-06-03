import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuentasAttributes {
  codigo?: number;
  subcodigo?: number;
  descrip?: string;
  cantidad?: number;
  precio?: number;
  importe?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  precio1?: number;
  precio2?: number;
  precio3?: number;
  precio4?: number;
  precio5?: number;
  precio6?: number;
  precio7?: number;
  precio8?: number;
  precio9?: number;
  precio10?: number;
  precio11?: number;
  precio12?: number;
  planilla?: string;
  tabla?: string;
  iva?: string;
  tipo?: string;
  id: number;
  nombre_tabla?: string;
  cod_cuenta?: number;
  tipo_cuenta?: string;
  cuenta_predef?: string;
  cod_deposito?: number;
  uni_medida?: string;
  cod_contabilidad?: number;
  computa_rpp?: string;
  cod_cultivo_rel?: number;
  cod_periodo?: number;
  color?: string;
  cod_afip_especie?: number;
}

export type cuentasPk = "id";
export type cuentasId = cuentas[cuentasPk];
export type cuentasCreationAttributes = Optional<cuentasAttributes, cuentasPk>;

export class cuentas extends Model<cuentasAttributes, cuentasCreationAttributes> implements cuentasAttributes {
  codigo?: number;
  subcodigo?: number;
  descrip?: string;
  cantidad?: number;
  precio?: number;
  importe?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  precio1?: number;
  precio2?: number;
  precio3?: number;
  precio4?: number;
  precio5?: number;
  precio6?: number;
  precio7?: number;
  precio8?: number;
  precio9?: number;
  precio10?: number;
  precio11?: number;
  precio12?: number;
  planilla?: string;
  tabla?: string;
  iva?: string;
  tipo?: string;
  id!: number;
  nombre_tabla?: string;
  cod_cuenta?: number;
  tipo_cuenta?: string;
  cuenta_predef?: string;
  cod_deposito?: number;
  uni_medida?: string;
  cod_contabilidad?: number;
  computa_rpp?: string;
  cod_cultivo_rel?: number;
  cod_periodo?: number;
  color?: string;
  cod_afip_especie?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuentas {
    cuentas.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    subcodigo: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio1: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio2: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio3: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio4: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio5: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio6: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio7: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio8: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio9: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio10: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio11: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    precio12: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    planilla: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    tabla: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    iva: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre_tabla: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    tipo_cuenta: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cuenta_predef: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    uni_medida: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_contabilidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    computa_rpp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_cultivo_rel: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cod_afip_especie: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cuentas',
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
  return cuentas;
  }
}
