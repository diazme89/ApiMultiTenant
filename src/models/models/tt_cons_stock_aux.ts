import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cons_stock_auxAttributes {
  idproc: number;
  rubro: number;
  rubro_descrip: string;
  subrubro: number;
  subrubro_descrip: string;
  codigo: number;
  descripcion: string;
  precio_gestion?: number;
  uni_medida?: string;
  ajustes?: number;
  negativos?: number;
  transito?: number;
  labores?: number;
  unidades?: number;
  existencia_transito?: number;
  existencia?: number;
  color: number;
  stock_minimo?: number;
  cod_deposito: number;
  deposito_descrip: string;
  importe?: number;
}

export type tt_cons_stock_auxPk = "idproc" | "codigo" | "cod_deposito";
export type tt_cons_stock_auxId = tt_cons_stock_aux[tt_cons_stock_auxPk];
export type tt_cons_stock_auxCreationAttributes = Optional<tt_cons_stock_auxAttributes, tt_cons_stock_auxPk>;

export class tt_cons_stock_aux extends Model<tt_cons_stock_auxAttributes, tt_cons_stock_auxCreationAttributes> implements tt_cons_stock_auxAttributes {
  idproc!: number;
  rubro!: number;
  rubro_descrip!: string;
  subrubro!: number;
  subrubro_descrip!: string;
  codigo!: number;
  descripcion!: string;
  precio_gestion?: number;
  uni_medida?: string;
  ajustes?: number;
  negativos?: number;
  transito?: number;
  labores?: number;
  unidades?: number;
  existencia_transito?: number;
  existencia?: number;
  color!: number;
  stock_minimo?: number;
  cod_deposito!: number;
  deposito_descrip!: string;
  importe?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cons_stock_aux {
    tt_cons_stock_aux.init({
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    rubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    rubro_descrip: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    subrubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    subrubro_descrip: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    precio_gestion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    uni_medida: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ajustes: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    negativos: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    transito: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    labores: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    unidades: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    existencia_transito: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock_minimo: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    deposito_descrip: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cons_stock_aux',
    timestamps: false,
    indexes: [
      {
        name: "cons_stock_aux_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_deposito" },
          { name: "codigo" },
        ]
      },
    ]
  });
  return tt_cons_stock_aux;
  }
}
