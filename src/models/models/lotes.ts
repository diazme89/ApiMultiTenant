import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lotesAttributes {
  codigo?: number;
  descrip?: string;
  superficie?: number;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  numero?: number;
  anterior?: string;
  variedad?: string;
  estimado?: number;
  anio?: number;
  comentario?: string;
  id: number;
  up?: string;
  finca?: string;
  col_aux_01_nombre?: string;
  col_aux_02_nombre?: string;
  col_aux_03_nombre?: string;
  col_aux_04_nombre?: string;
  col_aux_05_nombre?: string;
  col_aux_06_nombre?: string;
  col_aux_07_nombre?: string;
  col_aux_08_nombre?: string;
  col_aux_01_valor?: string;
  col_aux_02_valor?: string;
  col_aux_03_valor?: string;
  col_aux_04_valor?: string;
  col_aux_05_valor?: string;
  col_aux_06_valor?: string;
  col_aux_07_valor?: string;
  col_aux_08_valor?: string;
  col_aux_09_nombre?: string;
  col_aux_09_valor?: string;
  col_aux_10_nombre?: string;
  col_aux_10_valor?: string;
  col_aux_11_nombre?: string;
  col_aux_11_valor?: string;
  col_aux_12_nombre?: string;
  col_aux_12_valor?: string;
  cod_establecimiento?: number;
  inf_finca_lote?: number;
  col_aux_13_nombre?: string;
  col_aux_13_valor?: string;
  col_aux_14_nombre?: string;
  col_aux_14_valor?: string;
  col_aux_15_nombre?: string;
  col_aux_15_valor?: string;
  col_aux_16_nombre?: string;
  col_aux_16_valor?: string;
  col_aux_17_nombre?: string;
  col_aux_17_valor?: string;
  col_aux_18_nombre?: string;
  col_aux_18_valor?: string;
  col_aux_19_nombre?: string;
  col_aux_19_valor?: string;
  col_aux_20_nombre?: string;
  col_aux_20_valor?: string;
  col_aux_21_nombre?: string;
  col_aux_21_valor?: string;
  col_aux_22_nombre?: string;
  col_aux_22_valor?: string;
  cod_periodo?: number;
  latitud?: number;
  longitud?: number;
  imputa?: string;
}

export type lotesPk = "id";
export type lotesId = lotes[lotesPk];
export type lotesCreationAttributes = Optional<lotesAttributes, lotesPk>;

export class lotes extends Model<lotesAttributes, lotesCreationAttributes> implements lotesAttributes {
  codigo?: number;
  descrip?: string;
  superficie?: number;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  numero?: number;
  anterior?: string;
  variedad?: string;
  estimado?: number;
  anio?: number;
  comentario?: string;
  id!: number;
  up?: string;
  finca?: string;
  col_aux_01_nombre?: string;
  col_aux_02_nombre?: string;
  col_aux_03_nombre?: string;
  col_aux_04_nombre?: string;
  col_aux_05_nombre?: string;
  col_aux_06_nombre?: string;
  col_aux_07_nombre?: string;
  col_aux_08_nombre?: string;
  col_aux_01_valor?: string;
  col_aux_02_valor?: string;
  col_aux_03_valor?: string;
  col_aux_04_valor?: string;
  col_aux_05_valor?: string;
  col_aux_06_valor?: string;
  col_aux_07_valor?: string;
  col_aux_08_valor?: string;
  col_aux_09_nombre?: string;
  col_aux_09_valor?: string;
  col_aux_10_nombre?: string;
  col_aux_10_valor?: string;
  col_aux_11_nombre?: string;
  col_aux_11_valor?: string;
  col_aux_12_nombre?: string;
  col_aux_12_valor?: string;
  cod_establecimiento?: number;
  inf_finca_lote?: number;
  col_aux_13_nombre?: string;
  col_aux_13_valor?: string;
  col_aux_14_nombre?: string;
  col_aux_14_valor?: string;
  col_aux_15_nombre?: string;
  col_aux_15_valor?: string;
  col_aux_16_nombre?: string;
  col_aux_16_valor?: string;
  col_aux_17_nombre?: string;
  col_aux_17_valor?: string;
  col_aux_18_nombre?: string;
  col_aux_18_valor?: string;
  col_aux_19_nombre?: string;
  col_aux_19_valor?: string;
  col_aux_20_nombre?: string;
  col_aux_20_valor?: string;
  col_aux_21_nombre?: string;
  col_aux_21_valor?: string;
  col_aux_22_nombre?: string;
  col_aux_22_valor?: string;
  cod_periodo?: number;
  latitud?: number;
  longitud?: number;
  imputa?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof lotes {
    lotes.init({
    codigo: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true,
      unique: "lotesxkey1"
    },
    descrip: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cultivo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    rendimient: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    gast_comer: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    cuota_amor: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    anterior: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    estimado: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    up: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    finca: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    col_aux_01_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_02_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_03_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_04_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_05_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_06_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_07_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_08_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_01_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_02_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_03_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_04_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_05_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_06_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_07_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_08_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_09_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_09_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_10_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_10_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_11_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_11_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_12_nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    col_aux_12_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    inf_finca_lote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    col_aux_13_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_13_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_14_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_14_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_15_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_15_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_16_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_16_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_17_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_17_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_18_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_18_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_19_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_19_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_20_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_20_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_21_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_21_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_22_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    col_aux_22_valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    latitud: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitud: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imputa: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lotes',
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
        name: "lotesxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return lotes;
  }
}
